const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
  const db = mongoose.connect(process.env.MONGODB_URI || config.db);
  require('../app/models/userServerModel');
  return db;
};