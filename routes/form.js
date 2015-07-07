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

/* POST form. */
router.post('/', function(req, res) {
  new Comment({
  	title : req.body.comment,
  	url : req.body.url
  })
  .save(function(err, comment) {
    console.log(comment);
    res.redirect('form');
  });
});

module.exports = router;