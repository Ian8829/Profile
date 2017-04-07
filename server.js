process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configExpress = require('./config/express');

const app = configExpress();

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('Server is running at ' + PORT));
// listen port

module.exports = app;