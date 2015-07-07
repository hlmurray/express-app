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

/* POST form. */
router.delete('/:id', function (req, res) {
    Comment.findById(req.params.id)
        .exec(function(err, entries) {
           // changed `if (err || !doc)` to `if (err || !entries)`
            if (err || !entries) {
                res.statusCode = 404;
                res.send({});
            } else {
                entries.remove(function(err) {
                    if (err) {
                        res.statusCode = 403;
                        res.send(err);
                    } else {
                        res.send({});
                    }
                });
            }
        });
});

module.exports = router;