var User = require("../models/user");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use('user-local', new LocalStrategy(
	// Our user will sign in using an email, rather than a "username"
	{
		usernameField: "username",
		passwordField: 'password'
	},
	function (username, password, done) {
		var newuser = new User();
		User.findOne({ 'username': username })
			.then(function (dbUser) {

				if (!dbUser) {
					return done(null, false);
				}

				if (newuser.validPassword(password, dbUser.password)) {
					console.log("AUTHENTICATED");
					return done(null, dbUser);
				}
				return done(null, false);
			})
			.catch(function (err) {
				return done(err);
			});
	}
));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});


// Exporting our configured passport
module.exports = passport;