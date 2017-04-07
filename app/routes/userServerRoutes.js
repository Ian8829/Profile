const users = require('../../app/controllers/userServerControllers');
const passport = require('passport');

module.exports = app => {
    app.get('/profile', (req, res) => res.render('profile'));
    app.get('/sites', (req, res) => res.render('sites'));
    app.get('/music', (req, res) => res.render('music'));
    app.get('/login', (req, res) => res.render('indexLogin', {
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

    app.use((req, res, next) => {
        res.status(404).render('errorFour');
        next();
    });
    // 404 page

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).render('errorFive');
    });
    // 500 page
};