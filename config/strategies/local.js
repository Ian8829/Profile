const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

module.exports = () => {
    passport.use(new LocalStrategy((username, password, done) => {
        User.findOne({username}, (err, user) => {
            if(err) { return done(err); }
            if(!user) {
                return done(null, false, {message: 'User not exists!'});
            }
            if(!user.authenticate(password)) {
                return done(null, false, {message: 'Invalid Password!'});
            }
            return done(null, user);
        });
    }));
};