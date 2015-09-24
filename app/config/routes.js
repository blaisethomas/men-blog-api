var express = require('express'),
	apiRouter = express.Router(),
	articlesController = require('../controllers/articles'),
	Article = require('../models/article');

apiRouter.route('/articles')
	.post(function(req, res){
		console.log(req.body);
	})

module.exports = apiRouter;



