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

const findAll=(req,res)=>{
    _product.find()
        .then((data)=>{
            if(data.length==0){
                res.status(status.NO_CONTENT);
                res.json({msg:"No se encontraron marcas"});
            }else{
                res.status(status.OK);
                res.json({msg:"Éxito!!",data:data});
            }
        })
        .catch((err)=>{
            res.status(status.BAD_REQUEST);
            res.json({msg:"Error"});
        });
}

const deleteByI=(req,res)=>{
    const {id}=req.params;
    _product.findByIdAndRemove({_id:id})
        .then((data)=>{        
            res.status(status.OK);
            res.json({msg:"Éxito!!",data:data});
        })
        .catch((err)=>{
            res.status(status.BAD_REQUEST);
            res.json({msg:err});
        });

}


module.exports = (Product) => {
    _product = Product;
    return({
        createProduct,
        findAll,
        deleteByI
    });
}