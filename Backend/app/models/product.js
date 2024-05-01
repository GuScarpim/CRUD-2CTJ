// Modelos para representar seus dados no banco de dados
const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  nome: String,
  descricao: String,
  preco: Number,
  estoque: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;