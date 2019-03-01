const db = require("../models");
const axios = require("axios");

// Defining methods for the jobsController
module.exports = {
    search: function (req, res) {
        const params = {
            "sc.keyword": req.query.keyword,
            "locT": req.query.locT,
            "locId": req.query.locId
        }
        axios.get("https://www.glassdoor.com/Job/jobs.htm", {
            params
        }).then(function (response) {
            res.send(response.data);
        })
    },
    locationCompletion: function (req, res) {
        const params = {
            term: req.query.term,
            maxLocationsToReturn: 10
        }
        axios.get(`https://www.glassdoor.com/findPopularLocationAjax.htm?term=${req.query.term}`, {
            params
        }).then(glassdoorRes => res.send(glassdoorRes.data))
        .catch(err => console.log(err))
    }
};