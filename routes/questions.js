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
    console.log("row: ", row);
    console.log("fields: ", fields);
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

router.delete('/:id',function(req,res,next){
  db.query('DELETE FROM questions WHERE', {id:req.params.id}, function(err,result){
    if(err){
      res.status(400).send(err);
      return;
    }
    console.log("result: ", result);
    res.send(result);
  });

});


module.exports = router;