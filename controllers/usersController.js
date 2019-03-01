const db = require('../models');
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
        if (userData.userForms && userData.userForms.length) {
            const queries = userData.userForms.map(_id => ({ _id }));
            db.UserForm.find({
                $or: queries
            }).then(userForms => {
                userData.userForms = userForms;
                console.log(userForms);
                res.json({
                    success: true,
                    message: 'You have successfully logged in!',
                    user: userData
                })
            });
        } else {
            res.json({
                success: true,
                message: 'You have successfully logged in!',
                user: userData
            })
        }


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

exports.saveUser = function (req, res, next) {
    /*DELETE_ON_PRODUCTION
      req.body syntax:
    {
        username: {username of user},
        password: {password of user},
    }
    */
    passport.authenticate("local-signup", function (err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        if (!user) {
            return res.status(409).json({ errMsg: info.errMsg });
        }
        req.login(user, function (err) {
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.json({success: true, user});
        });
    })(req, res, next);
    // const newuser = new db.User();
    // req.body.password = newuser.generateHash(req.body.password);

    // db.User.create(req.body)
    //     .then(function (dbUser) {
    //         return db.User.findByIdAndUpdate(req.body, { $push: { users: dbUser._id } }, { new: true });
    //     })
    //     .catch(function (err) {
    //         // If an error occurred, send it to the client
    //         return res.json(err);
    //     });
}

exports.updateUser = function (req, res) {
   
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
}
