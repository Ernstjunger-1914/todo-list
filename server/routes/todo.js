const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
// const mysql = require('../utils/mysql');
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db=mysql.createPool({
  user: 'root',
  host: 'localhost',
  password: '0000',
  database: 'ssd'
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo' });
});

router.get('/get', (req, res)=> {
  const sqlselect="select * from content";
  db.query(sqlselect, (err, result)=> {
      res.send(result);
  });
});

router.post('/insert', (req, res)=> {
  const postname=req.body.postname;
  const main=req.body.main;
  const insert="insert into content(postname, main) values(?, ?)";

  db.query(insert, [postname, main], (err, result)=> {
    console.log(result);
  });
});

app.delete('/delete/:postname', (req, res)=> {
  const name=req.params.postname;
  const sqldelete="delete from content where postname=?";

  db.query(sqldelete, name, (err, result)=> {
      if(err) {
          console.log(err);
      }
  });
});

app.put('/update', (req, res)=> {
  const name=req.body.postname;
  const main=req.body.main;
  const sqlupdate="update content set main=? where postname=?";

  db.query(sqlupdate, [main, name], (err, result)=> {
      if(err) {
          console.log(err);
      }
  });
});

module.exports = router;
