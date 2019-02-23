var User = require("../models/user");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

function errHandler(err) {
	console.error('There was an error performing the operation');
	console.log(err);
	console.log(err.code);
	return console.error(err.message);
  }

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

passport.use('local-signup', new LocalStrategy(
	// Our user will sign in using an email, rather than a "username"
	{
		usernameField: "username",
		passwordField: 'password',
		passReqToCallback: true
	},
	function (req, username, password, done) {
		process.nextTick(function () {
			User.findOne({ username }, function (err, user) {
				if (err) {
					return errHandler(err);
				}
				if (user) {
					console.log('user already exists');
					return done(null, false, { errMsg: 'username already exists' });
				}
				else {
					var newUser = new User();
					newUser.username = req.body.username;
					newUser.username = username;
					newUser.email = req.body.email
					newUser.password = newUser.generateHash(password);
					newUser.save(function (err) {
						if (err) {
							console.log(err);
							if (err.message == 'User validation failed') {
								console.log(err.message);
								return done(null, false, { errMsg: 'Please fill all fields' });
							}
							return errHandler(err);
						}
						console.log('New user successfully created...', newUser.username);
						console.log('username', username);
						console.log(newUser);
						return done(null, newUser);
					});
				}
			});
		});
	}));

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