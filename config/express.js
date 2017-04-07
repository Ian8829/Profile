const config = require('./config');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');

module.exports = () => {
    const app = express();

    if(process.env.NODE_ENV === 'development') {
        app.use(logger('dev'));
        // logger morgan
    } else if(process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    // bodyParser

    app.use(methodOverride());
    // methodOverride

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    // set express-session

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    // main pug file

    app.use(flash());
    // connect-flash

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static(path.join(__dirname, '../public')));
    // load static files

    require('../app/routes/indexServerRoutes')(app);
    require('../app/routes/userServerRoutes')(app);

    return app;
};
