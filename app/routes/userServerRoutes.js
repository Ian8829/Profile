const users = require('../../app/controllers/userServerControllers');
const passport = require('passport');
const title = {title: 'Ian Prifole'};
// const userFullName ={userFullName: req.user ? req.user.fullName: ''};

module.exports = app => {
    app.get('/profile', (req, res) => res.render('profile', title));
    app.get('/sites', (req, res) => res.render('sites', title));
    app.get('/music', (req, res) => res.render('music', title));
    app.get('/login', (req, res) => res.render('indexLogin', {
        title: 'Ian Profile',
        userFullName: req.user ? req.user.fullName: ''
    }));
    // sub pages

    app.route('/signup').get(users.renderSignup).post(users.signup);
    app.route('/signin').get(users.renderSignin).post(passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }));

    app.get('/signout', users.signout);
    // authenticate basic

    app.get('/oauth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }));
    app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin',
        successRedirect: '/'
    }));
    // authenticate facebook

    app.use((req, res, next) => {
        res.status(404).render('errorFour', title);
        next();
    });
    // 404 page

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).render('errorFive', title);
    });
    // 500 page
};