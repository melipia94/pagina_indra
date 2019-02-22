'use strict'
//para trabajar con modelos tengo que importar mongoose que es el que se encarga
//de trabajar con los modelos

var mongoose= require('mongoose');
var Schema= mongoose.Schema;
// en mongoose debo definir los datos de esta manera
var NewSchema= Schema({
	titulo:String,
	descripcion: String,
	fecha: String,
	autor: String

});
//exportar este modulo
module.exports = mongoose.model('New', NewSchema);
//mongoos lo pone en mínuscula y lo pluralisa, por eso el nombre va así
//projects --> guarda los documents en la coleccion
