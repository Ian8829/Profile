const express = require('express');
const path = require('path');
const logger = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');

const index = require('../app/routes/index');

module.exports = function () {
    const app = express();

    if(process.env.NODE_ENV === 'development') {
        app.use(logger('dev'));
        // logger morgan
    } else if(process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use(methodOverride());

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');
    // main pug file

    app.use(flash());

    app.use(express.static(path.join(__dirname, '../public')));
    // load static files

    app.get('/', (req, res) => res.render('index'));
    // index

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

    return app;
};
