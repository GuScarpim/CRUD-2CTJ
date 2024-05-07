const mongoose = require('mongoose');

const connectionString = ''; // Sua URL DO MONGODB

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
