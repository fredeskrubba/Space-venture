const express = require('express');
const app = express();
const cors = require("cors");
const port = 3001;
const mysql = require('mysql');
let data = [];

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "forside"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM about_us", function (err, result, fields) {
    if (err) throw err;
    data.push(result)
  });

  con.query("SELECT * FROM banners", function (err, result, fields) {
    if (err) throw err;
    data.push(result)
  });

  con.query("SELECT * FROM footer", function (err, result, fields) {
    if (err) throw err;
    data.push(result)
  });

  con.query("SELECT * FROM team", function (err, result, fields) {
    if (err) throw err;
    data.push(result)
  });
});

app.use(cors());

app.get('/about', (req, res) => {
  res.send(data[0]);
})

app.get('/banners', (req, res) => {
  res.send(data[1]);
})

app.get('/footer', (req, res) => {
  res.send(data[2]);
})

app.get('/team', (req, res) => {
  res.send(data[3]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})