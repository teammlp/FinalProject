const db = require("../models");
const axios = require("axios");

// Defining methods for the userFormController
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
    },
    findAll: function (req, res) {
        db.UserForm
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.UserForm
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.UserForm
            .create(req.body)
            .then(dbModel => {
                db.User
                    .findById(req.body._user, function (err, user) {
                        console.log("DB_MODEL: %s", dbModel);
                        user.userForms.push(dbModel);
                        user.save(err => res.json(dbModel));
                    })

            }
            )
            .catch(err => res.status(422).json(err));


    },
    update: function (req, res) {
        db.UserForm
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.UserForm
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};