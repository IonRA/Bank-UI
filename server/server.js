var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, '../src/HTML')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/HTML', 'Home.html'));
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

	console.log('NPost method has been called');
	res.send('Succes');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});