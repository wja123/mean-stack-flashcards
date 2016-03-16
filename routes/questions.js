'use strict';

var express = require("express");

var router = express.Router();

var db = require("../config/db");

router.get('/',function(req,res,next){
  db.query('SELECT * FROM questions', function(err,row,fields){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log(req);
    res.send(row);
  });
});

router.get('/:id',function(req,res,next){
  db.query('SELECT * FROM questions WHERE ?', {id:req.params.id}, function(err,row,fields){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log(req);
    res.send(row);
  });
});

router.post('/',function(req,res,next){
  db.query('INSERT INTO questions SET ?', req.body, function(err,result){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log("result: ", result);
    res.send(result);
  });
});

router.get('/categories',function(req,res,next){
  db.query('SELECT DISTINCT category FROM questions', function(err,row,fields){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log("row: ", row);
    res.send(row);
  });
});

router.put('/:id',function(req,res,next){
  var updateString = "UPDATE questions SET category ='" + 
  req.body.category + "',question ='" + 
  req.body.question +"', hint='" + 
  req.body.hint +"', answer='" + req.body.answer +"' WHERE id='" + req.params.id +"'";

  console.log(updateString);
  db.query(updateString, function(err,result){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log("result: ", result);
    res.send(result);
  });
});

router.get('/category/:category', function(req,res,next){
  db.query('SELECT * FROM questions WHERE ?', req.params ,function(err, results){
    if(err){
      res.status(400).send(err);
      return;
    }
    res.send(results);
  });
});

router.delete('/:id',function(req,res,next){
  db.query('DELETE FROM questions WHERE ?', {id:req.params.id}, function(err,result){
    if(err){
      res.status(400).send(err);
      return;
    }
    res.send(result);
  });
});


module.exports = router;