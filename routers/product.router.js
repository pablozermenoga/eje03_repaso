const router = require('express').Router();

module.exports = (wagner) => {
    
    const productCtrl = wagner.invoke((Product) => 
        require('../controllers/product.controller')(Product));

    router.get('/',(req,res)=>
        productCtrl.findAll(req,res));
    
    router.get('/:id',(req,res)=>
        productCtrl.findUneP(req,res));

    router.post('/', (req, res) =>
        productCtrl.createProduct(req, res));

    router.delete('/:id',(req,res)=>
        productCtrl.deleteByI(req,res));
    
    router.put('/:id',(req,res)=>
        productCtrl.updateByIdP(req,res));
    
    
    return router
}
