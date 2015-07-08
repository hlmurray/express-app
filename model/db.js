var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Entry = new Schema({
    project : String,
    url: String,
    repo: String,
    description: String,
    updates: String
});

mongoose.model('entries', Entry);

mongoose.connect('mongodb://localhost/data');

