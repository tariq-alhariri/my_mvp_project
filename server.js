
const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const path    = require("path");
var fs = require ('fs')


var mongoose = require('mongoose');
var morgan = require('morgan');   
mongoose.connect('mongodb://localhost/app');
var Schema = mongoose.Schema;

var appSchema = new Schema({
  name:  String,
  url: String,
  icon:   String
});











var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('connected')
});

app.use('/', express.static(__dirname + '/main.js'));


app.get('/', function (req, res) {
fs.readFile('apps.html',function(err,data) {
	res.write(data)
	res.end()
});
});

app.get('/apps',function(req,res){
  res.render(path.join(__dirname+'/apps.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});





