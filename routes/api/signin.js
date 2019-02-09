const User = require("../models/user")


module.exports = (app) => {
    // app.get('/api/counters', (req, res, next) => {
    //   Counter.find()
    //     .exec()
    //     .then((counter) => res.json(counter))
    //     .catch((err) => next(err));
    // });
  
    // app.post('/api/counters', function (req, res, next) {
    //   const counter = new Counter();
  
    //   counter.save()
    //     .then(() => res.json(counter))
    //     .catch((err) => next(err));
    // });
    app.post('api/account/signup', (req, res, next) => {
        const {body} = req;
        const {
            username,
            password,
            email,
            name,
            profileImage
        } = body;

        if(!username) {
            return res.end({
                success: false,
                message: 'Error: Username cannot be blank.'
            });
        }
        if(!password) {
            return res.end({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }
        if(!email) {
            return res.end({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if(!name) {
            return res.end({
                success: false,
                message: 'Error: Name cannot be blank.'
            });
        }

        console.console.log(("Hello World"));
        
       email = email.toLowercase();

       User.find({
           email: email
       }, (err, previousUsers) => {
           if(err){
            return res.end("Error: Server error");
           }else if (previousUsers.length >0 ){
               return res.end ("Error: Account already exist.");
           }

           // Save the new user

           const newUser = new User();
           newUser.username = username;
           newUser.password = newUser.generateHash(password);
           newUser.email = email;
           newUser.name = name;
           newUser.save((err, user) => {
               if(err) {
                return res.end({
                    success: false,
                    message: 'Error: Service Error!'
                });
               }
               return res.end({
                success: true,
                message: 'Signed Up'
            });
           });
       });
    });
};