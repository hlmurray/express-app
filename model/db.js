var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Comment = new Schema({
    title : String,
    url: String,
    repo: String,
    description: String,
    updates: String
});

mongoose.model('comments', Comment);

// var caseStudies = new Schema({
// 	project: {
// 	    project_title    : String
// 	    project_link    : String,
// 	    project_repo    : String,
// 	    project_description    : String,
// 	    project_updates    : String
// 	}
// });

// var caseEntry = mongoose.model( 'caseStudies', caseStudies );

// var newCase = new caseEntry({
// 	project: { 
// 		project_title: 'Misha Nonoo',
// 		project_link: 'http://www.mishanonoo.com',
// 		project_repo: 'http://www.github.com/thecharles/mishanonoo',
// 		project_description: 'test test',
// 		project_update: 'test'
// 	}
// });
// console.log(newCase.project.project_title);
mongoose.connect('mongodb://localhost/data');

