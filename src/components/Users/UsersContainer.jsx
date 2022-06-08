import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setActivePage, setTotalUsersCount, setFetchingStatus, followUser, unfollowUser, getUsers } from '../../redux/UsersReducer';
import React from "react";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { useParams, useLocation } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        const location = { location: useLocation() };
        return <Children {...props} match={match} location={location} />
    }
}

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.activePage, this.props.pageSize);
    };

    onPageClick = (p) => {
        this.props.getUsers(p, this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching === true ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                activePage={this.props.activePage}
                onPageClick={this.onPageClick}
                followUser={this.props.followUser}
                unfollowUser={this.props.unfollowUser}
                followingIsDisabled={this.props.followingIsDisabled}
                userList={this.props.userList} />
        </>
    };
}

const mapStateToProps = (state) => {
    return {
        userList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        activePage: state.usersPage.activePage,
        isFetching: state.usersPage.isFetching,
        followingIsDisabled: state.usersPage.followingIsDisabled
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollow(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        },
        setActivePage: (activePageId) => {
            dispatch(setActivePage(activePageId))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCount(totalUsersCount))
        },
        setFetchingStatus: (status) => {
            dispatch(setFetchingStatus(status))
        }

    }
};

let dispatchObjs = {
    getUsers,
    followUser,
    unfollowUser
}

export default compose(connect(mapStateToProps, dispatchObjs), withAuthRedirect, withRouter)(UsersContainer);