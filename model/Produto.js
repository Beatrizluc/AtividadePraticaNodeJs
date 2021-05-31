const mongoose = require("mongoose");
const ProdutoSchema = mongoose.Schema({
    _id: {
        type: "Number",
        required: true
    },
    nome: {
        type: "string",
        required: true,
        unique: true
    },
    preco: "number",
    fabricante: "string",
    data_de_validade: "string"
});

const Produto = mongoose.model("Produto", ProdutoSchema)
module.exports = Produto;
