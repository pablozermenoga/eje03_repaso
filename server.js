const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const wagner = require('wagner-core');
const path = require('path');

const _config = require('./_config');
const expressJWT = require('express-jwt');

let app = express();

require('./models/models')(wagner);

const product = require('./routers/product.router')(wagner);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

const urlBase = "/api/eje02/";

const jwtOptions = {
path: [/^\/api\/eje02\/productos\//]
};

app.use(expressJWT({secret:_config.SECRETJWT}).unless(jwtOptions)); //restric

app.use(function(err, req, res, next){
    if(err.name=== 'UnauthorizedError'){
        res.status(err,status).send({
            code: err.status,
            message: err.message,
            details: err.code
        });
    }
    else{
        next();
    }
});

app.use(urlBase+'products',product);

module.exports = app;