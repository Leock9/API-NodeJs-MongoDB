//Realizar a montagens dos schemas do produto da API.
//Importar o mongoose
//Importar o mongoose paginate
const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

//Construindo o schema para o produto
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,  
    },
    //Proximo objeto para o Banco vai guardar a data de criação do produto
    createAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//Resgistrando um model na aplicação
mongoose.model('Product', ProductSchema);
