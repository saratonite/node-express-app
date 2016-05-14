var express = require('express');

var port = process.env.port || 8585;

var app = express();

var exphbs  = require('express-handlebars');




app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users

/* require routes */

var Index = require('./routes/index');
var users = require('./routes/users');



app.use('/',Index);

app.get('/users',users);

app.listen(port,function(){
	console.log('Listening on port :'+port);
});