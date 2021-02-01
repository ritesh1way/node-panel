var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin786",
    database: "learning-demo-1",
});

conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = router;