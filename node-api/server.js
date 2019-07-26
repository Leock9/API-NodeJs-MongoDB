//Importando o express
const express = require("express");
//Importando o mongoose após instalação via npm
const mongoose = require("mongoose");
//importando a require-dir
const requireDir = require("require-dir");
//Importando o cors
const cors = require('cors');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o banco de dados
mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true});

//Require do schema criado
//Quando a aplicação tiver mais models, usar a biblioteca require-dir: npm install require-dir
requireDir('./src/models');

//Chamando routes
app.use("/api", require("./src/routes"));

//ouvir porta 3001
app.listen(3001);

//Instalar o nodemon para salvar e atualizar automaticamente o servidor 'npm install -D nodemon'
/*Realizar a alteração do scrip do package.json, 
inserindo uma dependencia de desenvolvimento: "dev": "nodemon server.js"
Após isso usar o comando 'npm run dev para rodar' o servidor*/
//Para para o servidor pkill node  