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
    },

    getJobLists: function() {
        return axios.get("/api/jobLists");
      },
      getJobList: function(id) {
        return axios.get("/api/jobLists/" + id);
      },
      deleteJobList: function(id) {
        return axios.delete("/api/jobLists/" + id);
      },
      saveJobList: function(jobListData) {
          console.log(jobListData);
        return axios.post("/api/jobLists", jobListData);
      },

    getUserForms: function() {
        return axios.get("/api/userForm");
    },
      // Gets the userForm with the given id
    getUserForm: function(id) {
        return axios.get("/api/userForm/" + id);
    },
      // Deletes the userForm with the given id
    deleteUserForm: function(id) {
        return axios.delete("/api/userForm/" + id);
    },
      // Saves a userForm to the database
    saveUserForm: function(userFormData) {
          console.log(userFormData);
        return axios.post("/api/userForm", userFormData);
    }
};