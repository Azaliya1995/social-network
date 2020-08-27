//уровень DAL
import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8f4d3df8-9d58-45b7-aa7b-fcd86e0b522a"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        });
    }
};

export const FollowersAPI = {
    unFollowUsers(userId) {
        return instance.delete(`follow/${userId}`).then(response => {
            return response.data
        });
    },

    followUsers(userId) {
        return instance.post(`follow/${userId}`, {}).then(response => {
            return response.data
        })
    }
};

export const AuthAPI = {
    auth() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        })
    },

    logout() {
        return instance.delete(`auth/login`);
    }
};

export const ProfileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, {
            status: status
        })
    }
};