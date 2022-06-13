import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '6f7dfa2a-bf12-4426-8cb4-119b26ed9fcc'
    }
});

export const usersAPI = {
    getUsers(activePage = 1, pageSize = 10) {
        return instance.get(`users?page=${activePage}&count=${pageSize}`)
            .then(response => response.data);
    }
};

export const authAPI = {
    makeAuth() {
        return instance.get(`auth/me`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status : status});
    }
};

export const followerAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    }
};