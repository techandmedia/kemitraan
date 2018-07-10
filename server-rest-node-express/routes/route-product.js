const express = require("express");
const router = express.Router();
const mySQL = require("../config/config-MySQL");

// API for table: product_history

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

// API for table: product

exports.getProductByDate = router.get("/api/product/orderedbydate", (req, res) => {
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

exports.getProductByName = router.get("/api/product/orderedbyname", (req, res) => {
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
    "SELECT * from `product` WHERE id=?", [req.params.id],
    (err, results, fields) => {
      if (err) console.log(err);
      res.end(JSON.stringify(results));
    }
  );
});

exports.putProduct = router.put("/api/product/update/:id", (req, res) => {
  const putData = req.body;
  const idToPutData = req.params.id;
  mySQL.query(
    // "UPDATE `product` SET `category`=?, `productname`=?, `os`=?, `model`=?, `serialnumber`=?, `price`=?, `equipment_condition`=?, `detail`=?, `image`=? WHERE id=?", [putData, idToPutData],
    "UPDATE `product` SET ? WHERE id=?", [putData, idToPutData],
    (err, results, fields) => {
      if (err) console.log(err);
      // console.log(results.insertId);
      // res.end(JSON.stringify(results));
    }
  );
});

exports.postProduct = router.post("/api/product/new", (req, res) => {
  const postData = req.body;
  mySQL.query(
    "INSERT INTO `product` SET ?", postData,
    (err, results, fields) => {
      if (err) console.log(err);
      res.end(JSON.stringify(results));
    }
  );
});

exports.deleteProduct = router.delete("/api/product/delete/:id", (req, res) => {
  const conDeleteData = { id: req.params.id }
  const idToDelete = req.params.id
  mySQL.query(
    "DELETE FROM `product` WHERE id=?", [idToDelete, conDeleteData],
    (err, results, fields) => {
      if (err) console.log(err);
      res.end(JSON.stringify(results));
    }
  );
});

module.exports = router;
