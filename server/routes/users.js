const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const app = express();
const { User } = require('../models/User');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Register' });
});

router.post('/register', (req, res)=> { 
  console.log(req.body);
  const user=new User(req.body);


  user.save((err, userInfo)=> {
    if(err) return res.json({ success: false, err });

    return res.status(200).json({
        success: true
    });
  });
});

module.exports = router;
