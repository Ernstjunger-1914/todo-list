const express = require('express');
const mongoose = require('mongoose');
const cookieParser=require('cookie-parser');

const router = express.Router();
const app = express();
const { User } = require('../models/User');
const { auth } = require('../middleware/auth');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

// postman으로 테스트 시 Request를 JSON으로
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

router.post('/login', (req, res)=> {
  User.findOne({ email: req.body.email }, (err, user)=> {
    if(!user) {
      return res.json({
        loginSuccess: false, 
        message: "해당 이메일을 사용하는 유저가 없습니다."
      });
    }

    user.comparePassword(req.body.password, (err, isMatch)=> {
      if(!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "암호가 다릅니다."
        });
      }

      user.generateToken((err, user)=> {
        if(err) return res.json(400).send(err);

        res.cookie('x_auth', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id
        })
      })
    });
  });
});

router.get('/auth', auth, (req, res)=> {
  res.status(200).json({
    _id: req.user._id,
    isRoot: req.user.role===0?false:true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  });
});

router.get('/logout', auth, (req, res)=> {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user)=> {
      if(err) return res.json({ success: false, err });

      return res.status(200).send({
        success: true
      });
  });
});

module.exports = router;
