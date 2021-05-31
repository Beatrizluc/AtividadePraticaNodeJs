const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:127.0.0.1/supermarket',{useNewUrlParser: true});

const db = mongoose.connection;

const Produto = require(("../model/Produto"));

db.on('error', (error) => {
    console.log("Conexao nao estabelecida");
});

db.once('open', () => {
    console.log('Conexao realizada com sucesso');
});

module.exports = {

    getOneProduto (id){
        return Produto.find({_id: id});
    },

    getAllProdutos (){
        return Produto.find({});
    },

    deleteProduto (id){
        return Produto.deleteOne({_id: id});
    },

    updateProduto (produto){
        console.log(produto);
        return Produto.findByIdAndUpdate({_id: produto.id}, produto, {upsert: true, new: true});
    }


}