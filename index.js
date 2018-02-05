var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongooseTransactions = require('mongoose-transactions');
var cors = require('cors');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Kết nối đến mongodb ở project tạm
mongoose.connect('mongodb://nguyenhoang95:liuyifei1A@ds123658.mlab.com:23658/fun_zone_project');
mongoose.Promise = global.Promise;

var applicationRoutes = require('./routes/applicationRoutes');
applicationRoutes(app);
app.listen(app.get('port'), function(){
	console.log('I am running at port 3000!'); 
});