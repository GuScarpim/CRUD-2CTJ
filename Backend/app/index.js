const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importe o pacote CORS
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

const app = express();

// Middleware para habilitar o CORS
app.use(cors(corsOptions));

// Middleware para analisar o corpo da requisição JSON
app.use(bodyParser.json());
const port = 3000;

const produtoRoutes = require('./routes/product');

produtoRoutes(app); // Registre as rotas de produtos

app.listen(port, () => console.log(`Servidor em execução na porta ${port}`));
