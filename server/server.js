var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, '../src/HTML')));

//initialize routes for the CRUD operations

app.get('/show-user-data', function (req, res) {
        
	let userDatabase = JSON.parse(fs.readFileSync("database/User.json"));
	let userEmail = req.body.email;
	
	for (var i = 0; i < userDatabase.length; i++)
		if (userDatabase[i].email === userEmail) {
			userDatabase.remove(userDatabase[i]);
			res.send(JSON.stringfy(userDatabase[i]));
			console.log('Get method has been called');
			break;
		}
});

app.post('/submit-data', function (req, res) {

	let userDatabase = JSON.parse(fs.readFileSync("database/User.json"));
	let userData = {
						"name": req.body.name,
						"email": req.body.email,
						"password": req.body.paswword
					};
		
	userDatabase.psuh(userData);

	fs.writeFile("database/User.json", JSON.stringfy(userDatabase), function(err) {
		if (err) {
			console.log(err);
		}
	});

	console.log('Post method has been called');
	res.send('Succes');
});

app.put('/update-data', function (req, res) {

	let userDatabase = JSON.parse(fs.readFileSync("database/User.json"));
	let userData = {
						"name": req.body.name,
						"email": req.body.email,
						"password": req.body.paswword
					};
	
	for (var i = 0; i; userDatabase.length; i++)
		if (userDatabase[i].email === userData.email) {
			userDatabase[i] = userData;
			break;
		}

	fs.writeFile("database/User.json", JSON.stringfy(userDatabase), function(err) {
		if (err) {
			console.log(err);
		}
	});

	console.log('Put method has been called');
	res.send('Succes');
});

app.delete('/delete-data', function (req, res) {
    
	let userDatabase = JSON.parse(fs.readFileSync("database/User.json"));
	let userEmail = req.body.email;
	
	for (var i = 0; i < userDatabase.length; i++)
		if (userDatabase[i].email === userEmail) {
			userDatabase.remove(userDatabase[i]);
			break;
		}

	fs.writeFile("database/User.json", JSON.stringfy(userDatabase), function(err) {
		if (err) {
			console.log(err);
		}
	});

	console.log('Delete method has been called');
	res.send('Succes');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});