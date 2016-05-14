var express = require('express');
var users = express.Router();

var connection = require('../db/connection');


/* GET home page. */
users.get('/users', function(req, res, next) {

	connection.query('select * from users',function(err,rows,fields){

		console.log(err);
		console.log(fields);

		//res.json(rows);

		res.render('users',{"users":rows});

	});
});

module.exports = users;