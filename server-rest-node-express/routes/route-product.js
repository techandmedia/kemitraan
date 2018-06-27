const express = require("express");
const router = express.Router();
const mySQL = require("../config/config-MySQL");

exports.getProductHistory = router.get("/api/product_history", (req, res) => {
  mySQL.query("SELECT * from product_history", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});



exports.getProductHistory = router.get("/api/product_history/ordered", (req, res) => {
  mySQL.query("SELECT * FROM `product_history` ORDER BY `fullname`", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getProductHistory = router.get("/api/product/orderedbydate", (req, res) => {
  mySQL.query("SELECT * FROM `product` ORDER BY `product`.`time` DESC", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});


exports.getAllProduct = router.get("/api/product", (req, res) => {
  mySQL.query("SELECT * from product", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getSortedProduct = router.get("/api/product/ordered", (req, res) => {
  mySQL.query(
    "SELECT * FROM `product` ORDER BY `productname`",
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

exports.getProductByID = router.get("/api/product/:id", (req, res) => {
  mySQL.query(
    "SELECT * from product where id=?",
    [req.params.id],
    (err, results, fields) => {
      if (err) console.log(err);
      res.end(JSON.stringify(results));
    }
  );
});

exports.postProduct = router.post("/api/product/new", (req, res) => {
  var postData = req.body;
  mySQL.query(
    "INSERT INTO product SET ?",
    postData,
    (err, results, fields) => {
      if (err) console.log(err);
      console.log(results.insertId);
      res.end(JSON.stringify(results));
    }
  );
});

module.exports = router;
