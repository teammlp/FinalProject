import axios from "axios";

export default {
    getUserbyUsernamePass: function (username, password) {
        return axios.get(`/api/get/user/login?username=${username}&password=${password}`);
    },

    getUser: function (username) {
        return axios.get(`/api/get/user/${username}`);
    },

    saveUser: function (username, password, email) {

        return axios.put('/api/user', {
            username: username,
            password: password,
            email: email
        });
    },

    updateUser: function (id, username, password) {
        return axios.post('/api/user', {
            id: id,
            username: username,
            password: password
        });
    },

    deleteUser: function (userID) {
        return axios.delete(`/api/delete/user/${userID}`);
    },

    pleasegodlogin: function(cred){
        return axios.post(`/api/user/login`,cred);
    }
};