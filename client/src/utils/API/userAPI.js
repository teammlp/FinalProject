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

    getTasks: function() {
        return axios.get("/api/task");
      },
      getTask: function(id) {
        return axios.get("/api/task/" + id);
      },
      deleteTask: function(id) {
        return axios.delete("/api/task/" + id);
      },
      saveTask: function(taskData) {
          console.log(taskData);
        return axios.post("/api/task", taskData);
      },

    getUserForms: function(id) {
        return axios.get(`/api/userForm/?_user=${id}`);
    },
      // Gets the userForm with the given id
    getUserForm: function(id) {
        return axios.get("/api/userForm/" + id);
    },
      // Deletes the userForm with the given id
    deleteUserForm: function(id) {
        return axios.delete("/api/userForm/" + id);
    },
    updateUserForm: function(id){
        return axios.update("/api/userForm" + id);
    },
      // Saves a userForm to the database
    saveUserForm: function(userFormData) {
          console.log(userFormData);
        return axios.post("/api/userForm", userFormData);
    },

//=========JobBoard=========

    getJobBoardSearch: function(query) {

        return axios.get(`https://cors-anywhere.herokuapp.com/https://data.usajobs.gov/api/search&apikey=${process.env.REACT_APP_JB_KEY}` + query)
    },

    // Gets all jobBoards
    getJobBoards: function () {
        return axios.get("/api/jobBoard");
    },

    // Gets the jobBoard with the given id
    getJobBoard: function (id) {
        return axios.get("/api/jobBoard/" + id);
    },

    // Saves a jobBoard to the database
    saveJobBoard: function (savedJobBoard) {
        return axios.post("/api/jobBoard", savedJobBoard);
    },

    // Deletes the jobBoard with the given id
    deleteJobBoard: function (id) {
        return axios.delete("/api/jobBoard/" + id);
    }
};