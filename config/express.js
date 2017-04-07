const express = require('express');
const path = require('path');
const logger = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');

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

    app.use(methodOverride());

    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');
    // main pug file

    app.use(flash());

    app.use(express.static(path.join(__dirname, '../public')));
    // load static files

    app.get('/', (req, res) => res.render('index'));
    // index

    require('../app/routes/userServerRoutes')(app);
    require('../app/routes/indexServerRoutes')(app);
    return app;
};
