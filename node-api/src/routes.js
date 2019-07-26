const express = require ('express');
const routes = express.Router();
const ProductController = require ('./controllers/ProductController');



//Rota de listagem
routes.get("/products", ProductController.index);

//Rota de pesquisa
routes.get('/products/:id', ProductController.show);

//Rota para creat
routes.post('/products', ProductController.store);

//Rota para update
routes.put('/products/:id', ProductController.update);

//Rota para delete
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes


