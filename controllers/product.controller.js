const http = require('http');
const path = require('path');
const status = require('http-status');

let _product;

const createProduct = (req, res) => {
    const product = req.body;

    _product.create(product)
        .then((data)=> {
            res.status(200);
            res.json({msg:"PRODUCTO AÑADIDO", data: data});
        })
        .catch((err)=> {
            res.status(400);
            res.json({msg:"ERROR EN PRODUCTO ", err:err});
        })
}
module.exports = (Product) => {
    _product = Product;
    return({
        createProduct,
    });
}