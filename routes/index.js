var express = require('express');
var router = express.Router();
const userModel = require('../models/user');
const postModel = require('../models/post');
const bordModel = require('../models/board');
const jwt = require('jsonwebtoken');
const bcrypt =  require('bcrypt');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/profile', isloggedin,function(req, res, next) {
  console.log(req.cookies.token);
  res.render('profile');
});

router.post('/register', (req, res, next) => {
  const {email, password, date} = req.body;
  bcrypt.genSalt(9, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        email,
        password: hash,
        birthday: date
      })
      const token = jwt.sign({email, userid: user._id}, 'secret')
      res.cookie("token", token)
      res.redirect('/profile');
    });
  })
});

router.get('/logout', (req, res) => {
  res.cookie('token', "")
  res.redirect("/")
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body;
  let user = await userModel.findOne({email});
  if (!user) res.send('user not found');
  bcrypt.compare(password, user.password, (err, result) => {
    if(result){
      const token = jwt.sign({email, userid: user._id}, 'secret')
      res.cookie("token", token)
      res.redirect('/profile');
    }
    else{
      res.send('password is wrong');
    }
  })
})

function isloggedin(req, res, next) {
  if(req.cookies.token === "") res.redirect('/');
  else{
    const data = jwt.verify(req.cookies.token, 'secret');
    console.log(data)
    req.user = data
  }
  next()
}

module.exports = router;
