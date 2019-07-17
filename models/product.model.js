const mongoose = require('mongoose')
const SchemaTypes = mongoose.Schema.Types;

productSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    img:{
        type:String
    }


    
});

const productModel = mongoose.model('Product', productSchema, 'products');

module.exports = productModel;