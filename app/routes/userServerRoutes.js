const passport = require('passport');

module.exports = app => {
    app.get('/profile', (req, res) => res.render('profile'));
    app.get('/sites', (req, res) => res.render('sites'));
    app.get('/music', (req, res) => res.render('music'));
    app.get('/login', (req, res) => res.render('login'));
    app.get('/logout', (req, res) => res.render('login'));
    // sub pages

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