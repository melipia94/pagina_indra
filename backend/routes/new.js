'use strict'
var express =require('express');
//se carga el modulo expres

var NewController= require('../controllers/new');

var router= express.Router();
var multipart= require('connect-multiparty');


router.post('/save-new', NewController.SaveNew);
router.get('/noticia/:id?', NewController.getNew);
router.get('/noticias', NewController.getNews);
router.put('/noticia/:id', NewController.updateNew);
router.delete('/noticia/:id', NewController.deleteNew);

module.exports= router;