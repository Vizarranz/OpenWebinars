var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs/promises');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use ((req, res, next) => {
    console.log(new Date());
    req.currentDate = new Date();
    // console.log(req.currentDate);
    next();// Sirve para que la aplicación siga el flujo de lectura y no se pare en la línea anterior.
});

app.use((req,res,next) => {
    const randomNum =  Math.random();
    if (randomNum > 0.6) {
        res.send('No puedes acceder');
    } else {
        next();
    }
});

app.use(async(req,res,next) => {
    await fs.appendFile('./main.log',`Método de la petición ${req.method}. Url: ${req.url}\n`);
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);// Delegar la información del fichero

module.exports = app;
