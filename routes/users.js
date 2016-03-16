var express = require('express');
var router = express.Router();
var db = require("../config/db");

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query('SELECT * FROM user', function(err, usernames) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(usernames);
    });
});

router.get('/:id', function(req, res, next) {
    db.query('SELECT * FROM user WHERE ?', {
        id: req.params.id
    }, function(err, usernames) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(usernames);
    });
});

router.get('/user/:name', function(req, res, next) {
    db.query('SELECT * FROM user WHERE ?', {
        username: req.params.name
    }, function(err, usernames) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(usernames);
    });
});

router.post('/', function(req, res) {
    console.log('req.body:', req.body);
    db.query('INSERT INTO user set ?', req.body, function(err, result) {
        if (err) {
            res.status(400).send(err);
            return;
        }

        res.send(result);
    });
});

router.put('/', function(req, res) {
    console.log('req.body:', req.body);
    var queryString = 'UPDATE user SET score='+req.body.score+' WHERE id='+req.body.id;
    db.query(queryString, function(err, result) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

module.exports = router;