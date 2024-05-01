meu-projeto-crud/
├── app/                   # Diretório principal da aplicação
│   ├── controllers/      # Controladores para rotas e lógica de negócio
│   │   ├── produto.js    # Controlador de produtos
│   │   └── usuario.js     # Controlador de usuários (e outros se necessário)
│   ├── models/           # Modelos para interação com o banco de dados
│   │   ├── produto.js    # Modelo de produto
│   │   └── usuario.js     # Modelo de usuário (e outros se necessário)
│   ├── routes/           # Rotas da API REST
│   │   ├── produto.js    # Rotas de produtos
│   │   └── usuario.js     # Rotas de usuários (e outros se necessário)
│   │── index.js          # Ponto de entrada da aplicação
│   ├── config/                # Configurações da aplicação
│   │   └── database.js        # Configuração da conexão com o MongoDB
│   ├── package.json          # Arquivo de dependências do projeto
│   └── README.md              # Arquivo com instruções do projeto
└───────────────────────