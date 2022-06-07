import {connect} from 'react-redux';
import { follow, unfollow, setUsers, setActivePage, setTotalUsersCount, setFetchingStatus, setFollowingButtonStatus} from '../../redux/UsersReducer';
import React from "react";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { followerAPI, usersAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        usersAPI.getUsers(this.props.activePage, this.props.pageSize).then(data => {
            this.props.setFetchingStatus(true);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
            setTimeout(() =>
                this.props.setFetchingStatus(false)
                , 2000);
        });;
    };

    onPageClick = (p) => {
        this.props.setActivePage(p);
        this.props.setFetchingStatus(true);
        usersAPI.getUsers(p, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setFetchingStatus(false);
            });
    };

    onFollowButtonClick = (userId) => {
        this.props.setFollowingButtonStatus(true, userId); 
        followerAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(userId);
                }
                this.props.setFollowingButtonStatus(false, userId); 
            });
    }

    onUnfollowButtonClick = (userId) => {
        this.props.setFollowingButtonStatus(true, userId); 
        followerAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(userId);
                }
                this.props.setFollowingButtonStatus(false, userId); 
            });
    }

    render() {
        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                activePage={this.props.activePage}
                onPageClick={this.onPageClick}
                onFollowButtonClick={this.onFollowButtonClick}
                onUnfollowButtonClick={this.onUnfollowButtonClick}
                followingIsDisabled={this.props.followingIsDisabled}
                userList={this.props.userList}
                setFollowingButtonStatus={this.props.setFollowingButtonStatus}/>
        </>
    };
}

const mapStateToProps = (state)=>{
    return{         
        userList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        followingIsDisabled: state.usersPage.followingIsDisabled
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userId)=>{
            dispatch(follow(userId));
        },

        unfollow: (userId)=>{
            dispatch(unfollow(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsers(users))
        },
        setActivePage: (activePageId)=>{
            dispatch(setActivePage(activePageId))
        },
        setTotalUsersCount: (totalUsersCount)=>{
            dispatch(setTotalUsersCount(totalUsersCount))
        },
        setFetchingStatus: (status)=>{
            dispatch(setFetchingStatus(status))
        }

    }
};

let dispatchObjs = {
    follow,
    unfollow,
    setUsers,
    setActivePage,
    setTotalUsersCount,
    setFetchingStatus,
    setFollowingButtonStatus
}


export default connect(mapStateToProps,dispatchObjs)(UsersContainer); 