const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const app = express();
const { User } = require('../models/User');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

//postman으로 테스트 시 Request를 JSON으로
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
