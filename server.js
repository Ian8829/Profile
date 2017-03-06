/**
 * Created by ian on 2017. 2. 19..
 */
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;
const middleWare = require('./middleWare');

const index = require('./routes/index');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

app.listen(PORT, () => console.log('Server is running at ' + PORT));