var express = require('express');

var port = process.env.port || 8585;

var app = express();

var exphbs  = require('express-handlebars');

var mysql = require('mysql');

var connection = mysql.createConnection({ // Mysql Connection
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'test',
});


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.get('/',function(req,res){

	//res.sendfile('./public/index.html');
	res.render('home');

});

app.get('/data',function(req,res){

	connection.query('select * from users',function(err,rows,fields){

		console.log(err);
		console.log(fields);

		//res.json(rows);

		res.render('users',{"users":rows});

	});
});

app.listen(port,function(){
	console.log('Listening on port :'+port);
});