/**
 * Created by ian on 2017. 2. 19..
 */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const middleWare = require('./middleWare');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.send('Hello David'));
app.set('views', __dirname + '/img');

// app.get('/', function(req, res){
//     var path = req.path;
//     res.locals.path = path;
//     res.render('index');
// });

app.listen(PORT, () => console.log('Server is running at ' + PORT));