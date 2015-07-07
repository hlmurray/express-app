var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Comment = new Schema({
    project : String,
    url: String,
    repo: String,
    description: String,
    updates: String
});

mongoose.model('comments', Comment);

mongoose.connect('mongodb://localhost/data');

