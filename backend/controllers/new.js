'use strict'
var New= require('../models/new');
var fs =require('fs');
var path= require('path');

var controller= {

	SaveNew: function(req, res){
		
		var noticia = new New();
		
		var params= req.body;
		
		noticia.titulo= params.titulo;
		noticia.descripcion= params.descripcion;
		noticia.fecha= params.fecha;
		noticia.autor= params.autor;
		

		noticia.save((err,noticiaStored)=>{
			if(err) return res.status(500).send({message:'Error al guardar la noticia'});

			if(!noticiaStored) return res.status(404).send({message:'No se ha podido guardar la noticia'});
			return res.status(200).send({noticia: noticiaStored});

		});
		
		
		

	},
	getNew:function(req,res){
		var noticiaId= req.params.id;
		New.findById(noticiaId,(err, noticia)=>{
			if(err) return res.status(500).send({message:'Error al devolver la noticia'});

			if (!noticia) return res.status(404).send({message:'La noticia no existe'});

				//que no le llegue el objeto del proyeco corrctamente
			return res.status(200).send({
				noticia

			});

		});
	},

	getNews: function(req, res){
		New.find({}).exec((err, noticias) =>{
			//puede ir find({year:2019}), puede ir sin el sort
			if(err) return res.status(500).send({message: 'Error al devolver la noticia'});

			if(!noticias) return res.status(404).send({message: 'No hay noticias que mostrar'});

			return res.status(200).send({noticias});


		});
	},

	updateNew: function(req, res){
		var noticiaId= req.params.id;
		var update= req.body;

		New.findByIdAndUpdate(noticiaId, update, (err, noticiaUpdated)=>{
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!noticiaUpdated) return res.status(404).send({message:'No existe la noticia'});

			return res.status(200).send({
				noticia: noticiaUpdated


			});


		});
	},
	deleteNew: function(req, res){
		var noticiaId= req.params.id;
		New.findByIdAndRemove(noticiaId, (err, noticiaRemoved)=>{
			if(err) return res.status(500).send({message:'No se ha podido borrar la noticia'});
			if (!noticiaRemoved) return res.status(404).send({message:'No se puede eliminar la noticia'});
			return res.status(200).send({
				noticia: noticiaRemoved

			});
		});

	},






};
module.exports=controller;
