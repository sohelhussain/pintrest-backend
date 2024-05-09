var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const postModel = require('../models/post');
const bordModel = require('../models/board');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
