'use strict';

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "test",
    database: "flashcards"
});

connection.connect(function(err){
if(err){
  console.log('Error:', err);
}
else{
  console.log('Connection success!');
}
});

module.exports = connection;