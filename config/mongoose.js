const config = require('./config');
const mongoose = require('mongoose');

module.exports = () => {
  const db = mongoose.connect(config.db);
  require('../app/models/userServerModel');
  return db;
};