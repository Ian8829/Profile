process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configMongoose = require('./config/mongoose');
const configExpress = require('./config/express');
const configPassport = require('./config/passport');

const db = configMongoose();
const app = configExpress();
const passport = configPassport();

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running at ${PORT}`));
// listen port

module.exports = app;