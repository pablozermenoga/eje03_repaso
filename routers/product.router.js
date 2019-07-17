const router = require('express').Router();

module.exports = (wagner) => {
    
    const productCtrl = wagner.invoke((Product) => 
        require('../controllers/product.controller')(Product));

    router.post('/', (req, res) =>
        productCtrl.createProduct(req, res));
    return router
}
