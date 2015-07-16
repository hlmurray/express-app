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

mongoose.connect('mongodb://hlmurray:coleman03@ds047722.mongolab.com:47722/internal-app');

