/**
 * Created by ian on 2017. 2. 19..
 */
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello David'));
app.use(express.static(__dirname + '/public'));
app.listen(PORT, () => console.log('Server is running at ' + PORT));