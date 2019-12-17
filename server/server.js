var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../src/HTML')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/HTML', 'Home.html'));
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
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