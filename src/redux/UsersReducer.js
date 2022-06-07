import { usersAPI, followerAPI } from "../api/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_STATUS = 'TOGGLE_FOLLOWING_STATUS';

let initialState = {
    usersList: [
    ],
    pageSize: 5,
    totalUsersCount: 0,
    activePage: 1,
    isFetching: false,
    followingIsDisabled: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {
                ...state,
                usersList: [...action.users]
            };
        case SET_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.activePageId
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.fetchingStatus
            }
        case TOGGLE_FOLLOWING_STATUS:
            return {
                ...state,
                followingIsDisabled: action.followingIsDisabled
                    ? [...state.followingIsDisabled, action.userId]
                    : [state.followingIsDisabled.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({
    type: FOLLOW,
    userId
});


export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setActivePage = (activePageId) => ({
    type: SET_ACTIVE_PAGE,
    activePageId
});

export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});

export const setFetchingStatus = (fetchingStatus) => ({
    type: TOGGLE_IS_FETCHING,
    fetchingStatus
});

export const setFollowingButtonStatus = (followingIsDisabled, userId) => ({
    type: TOGGLE_FOLLOWING_STATUS,
    followingIsDisabled,
    userId

});

export const getUsers = (activePage, pageSize) => {
    return (dispatch) => {
        dispatch(setFetchingStatus(true));
        dispatch(setActivePage(activePage));
        usersAPI.getUsers(activePage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount))
            setTimeout(() =>
                dispatch(setFetchingStatus(false)
                    , 2000));
        });;
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
    dispatch(setFollowingButtonStatus(true, userId)); 
    followerAPI.followUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(setFollowingButtonStatus(false, userId)); 
        });
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
    dispatch(setFollowingButtonStatus(true, userId)); 
    followerAPI.unfollowUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId));
            }
            dispatch(setFollowingButtonStatus(false, userId)); 
        });
    }
}
export default usersReducer;