const mongoose = require('mongoose');

const connectionString = ''; // Substitua por sua string de conexão

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
