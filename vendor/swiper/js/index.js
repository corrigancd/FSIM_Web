var express = require('express');
var router = express.Router();

console.log('here index');

//end points
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET services. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Express' });
});

/* GET clients. */
router.get('/clients', function (req, res, next) {
  res.render('clients', { title: 'Express' });
});

/* GET partners. */
router.get('/partners', function (req, res, next) {
  res.render('partners', { title: 'Express' });
});

/* GET news. */
router.get('/news', function (req, res, next) {
  res.render('news', { title: 'Express' });
});

/* GET contact. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
