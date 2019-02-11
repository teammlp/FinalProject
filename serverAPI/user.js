const db = require('../models');
const User = require('../models/User');
const passport = require("passport");

// login
exports.pleasegodlogin = (req, res, next) => {

    return passport.authenticate('user-local', (err, userData) => {
        if (err) {
            console.log(err);
            if (err.name === 'IncorrectCredentialsError') {
                return res.status(400).json({
                    success: false,
                    message: err.message
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Could not process.'
            });
        }
        console.log(userData, " userData in users_api.js");
        if (!userData) {
            return res.json({
                success: false,
                message: 'Login Failed',
                user: userData
            })
        }
        return res.json({
            success: true,
            message: 'You have successfully logged in!',
            user: userData
        });
    })(req, res, next);
};

exports.getUserbyUsernamePass = function (req, res) {
    var newuser = new User();
    db.User.findOne({ username: req.query.username })
        .then(function (dbUser) {
            if (newuser.validPassword(req.query.password, dbUser.password)) {
                console.log("AUTHENTICATED");
                return res.json(dbUser);
            }
            return res.json(null);
        })
        .catch(function (err) {
            console.log(err);
            return res.json(err);
        });
}

exports.getUser = function (req, res) {
    /*DELETE_ON_PRODUCTION
    req.params gives _id of user
    */
    db.User.findOne({ username: req.params.username })
        .then(function (dbUser) {
            console.log("USER", dbUser);
            res.json(dbUser);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
        });
}

exports.saveUser = function (req, res) {
    /*DELETE_ON_PRODUCTION
      req.body syntax:
    {
        username: {username of user},
        password: {password of user},
    }
    */
    var newuser = new db.User();
    req.body.password = newuser.generateHash(req.body.password);

    // db.User.create(req.body)
    //     .then(function (dbUser) {
    //         return db..findByIdAndUpdate(req.body.admin, { $push: { users: dbUser._id } }, { new: true });
    //     })
    //     .then(function (dbAdmin) {
    //         // If we were able to successfully update an Admin, send it back to the client
    //         res.json(dbAdmin);
    //     })
    //     .catch(function (err) {
    //         // If an error occurred, send it to the client
    //         return res.json(err);
    //     });
}

exports.updateUser = function (req, res) {
    /*DELETE_ON_PRODUCTION
      req.body syntax:
        {
            id: {_id of question to be updated}
            username: {new username of user}
            password: {new password of user}
        }
        */
    db.User.findByIdAndUpdate(req.body.id,
        {
            username: req.body.username,
            password: req.body.password
        }, { new: true })
        .then(function (dbUser) {
            res.json(dbUser);
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
        });
}

exports.deleteUser = function (req, res) {

    db.User.findById(req.params.id)
                .then(function (result) {
                    const newUsers = [];
                    result.users.forEach(id => {
                        if (id == req.params.id) {
                            db.User.findByIdAndRemove(id)
                                .catch(function (err) {
                                    // If an error occurred, send it to the client
                                    return res.json(err);
                                });;
                        }
                        else newUsers.push(id);
                    });
                })
                .catch(function (err) {
                    // If an error occurred, send it to the client
                    return res.json(err);
                });
        })
        .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
        });
}