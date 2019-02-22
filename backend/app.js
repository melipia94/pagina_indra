'use strict'

var express= require('express');
var bodyParser= require('body-parser');
//cuando hago un require lo que hace es acceder a esa
// carpeta en node y cargar el objeto


var app= express();
var new_routes= require ('./routes/new');
//archivos rutas

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
app.use('/', new_routes);


//exportar
module.exports =app;