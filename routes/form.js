var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');

/* GET form. */
router.get('/', function(req, res) {
  Comment.find(function(err, comments){
    console.log(comments);
    res.render(
      'form',
      {title : 'Add New Case Study', comments : comments}
    );
  });
});

/* Add New Case Study */
router.post('/', function(req, res) {
  new Comment({
  	project : req.body.comment,
  	url : req.body.url,
  	repo : req.body.repo,
  	description : req.body.description,
  	updates : req.body.updates
  })
  .save(function(err, comment) {
    console.log(comment);
    res.redirect('form');
  });
});

/* Delete Case Study */
router.delete('/:id', function (req, res) {

});

module.exports = router;