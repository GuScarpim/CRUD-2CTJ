const Product = require('../models/product');

// Função para listar todos os products
exports.listarProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Função para criar um novo product
exports.create = async (req, res) => {
  try {
    const novoProduct = await Product.create(req.body);
    res.status(201).json(novoProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Função para buscar um product por ID
exports.findById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product não encontrado.' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Função para atualizar um product por ID
exports.updateById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product não encontrado.' });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Função para deletar um product por ID
exports.deleteById = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product não encontrado.' });
    }
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
