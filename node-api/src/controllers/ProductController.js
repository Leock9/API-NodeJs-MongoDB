const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//retornando do banco de dados
module.exports = {
    async index(req, res){
        //Selecionar por pagina
        const { page = 1 } = req.query;
        //Leitura
        const products = await Product.paginate({}, { page, limit:10});

        return res.json(products);
    },

    async show (req, res){
        //Pesquisa
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res){
        //Criação
        const product = await Product.create(req.body);

        return res.json(product)
    },

    async update(req, res){
        //Ateração
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product)
    },

    async destroy(req, res){
        //Excluir
        await Product.findByIdAndRemove(req.params.id);
        //Retornando resposta de sucesso
        return res.send()
    }
    
};
