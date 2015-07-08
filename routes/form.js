var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = mongoose.model('entries');

/* GET form. */
router.get('/', function(req, res) {
  Entry.find(function(err, entries){
    console.log(entries);
    res.render(
      'form',
      {title : 'Add New Case Study', entries : entries}
    );
  });
});

/* Add New Case Study */
router.post('/', function(req, res) {
  new Entry({
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
    Entry.findById(req.params.id)
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
                        res.send('Deleted entry with link: ', entries.link);
                    }
                });
            }
        });
});

module.exports = router;