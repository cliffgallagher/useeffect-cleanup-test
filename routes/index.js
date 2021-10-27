var express = require('express');
var router = express.Router();
var bookController =require('../controllers/bookController');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("entered route in index.js")
  next()
}, bookController.index);

module.exports = router;