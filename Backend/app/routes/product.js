const productController = require('../controllers/product');

module.exports = (app) => {
  // Rota para listar todos os produtos
  app.get('/produtos', productController.listarProducts);

  // Rota para criar um novo produto
  app.post('/produtos', productController.create);

  // Rota para buscar um produto por ID
  app.get('/produtos/:id', productController.findById);

  // Rota para atualizar um produto por ID
  app.put('/produtos/:id', productController.updateById);

  // Rota para deletar um produto por ID
  app.delete('/produtos/:id', productController.deleteById);
};
