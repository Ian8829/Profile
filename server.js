/**
 * Created by ian on 2017. 2. 19..
 */
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;
// const middleWare = require('./middleWare');

const index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// main pug file

app.use(express.static(path.join(__dirname, 'public')));
// load static files

app.use(logger('dev'));
// logger morgan

app.get('/', (req, res) => res.render('index'));
// index

app.get('/profile', (req, res) => res.render('profile'));


app.listen(PORT, () => console.log('Server is running at ' + PORT));
// listen port