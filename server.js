/**
 * Created by ian on 2017. 2. 19..
 */
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;
const expressVue = require('express-vue');
// const middleWare = require('./middleWare');

const index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// main pug file

// app.engine('vue', expressVue);
// app.set('view engine', 'vue');


app.use(express.static(path.join(__dirname, 'public')));
// load static files

app.use(logger('dev'));
// logger morgan

app.get('/', (req, res) => res.render('index'));
// index

app.get('/profile', (req, res) => res.render('profile'));
app.get('/sites', (req, res) => res.render('sites'));
app.get('/music', (req, res) => res.render('music'));
app.get('/login', (req, res) => res.render('login'));


app.listen(PORT, () => console.log('Server is running at ' + PORT));
// listen port