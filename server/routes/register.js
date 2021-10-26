const express = require('express');
const router = express.Router();
const bodyparser=require('body-parser');
const mongoose = require('mongoose');

const app=express();
const { User }=require('../models/User');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=> { 
    const user=new User(req.body)

    user.save((err, userInfo)=> {
        if(err) return res.json({ success: false, err });

        return res.status(200).json({
            success: true
        })
    })
});

module.exports = router;
