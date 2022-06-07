import {connect} from 'react-redux';
import { follow, unfollow, setUsers, setActivePage, setTotalUsersCount, setFetchingStatus, followUser, unfollowUser, getUsers} from '../../redux/UsersReducer';
import React from "react";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { followerAPI } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.pageSize);
    };

    onPageClick = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    };

    onFollowButtonClick = (userId) => {
        this.props.followUser(userId);
    }

    onUnfollowButtonClick = (userId) => {
        this.props.unfollowUser(userId);
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
    getUsers,
    followUser,
    unfollowUser
}

export default connect(mapStateToProps,dispatchObjs)(UsersContainer); 