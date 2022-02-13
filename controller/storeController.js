const req = require('express/lib/request');
const db = require('../config/db');

// Create place an order for a pet
const insertOrder = (req, res) => {
  let data = {
    petId: req.body.petId,
    quantity: req.body.quantity,
    shipdate: req.body.shipdate,
    status: req.body.status,
    complete: req.body.complete,
  };

  let insertQuery = `INSERT INTO store SET ?;`;

  db.query(insertQuery, data, function (error, results, fields) {
    if (error) throw error;
  });
  res.send({ message: 'Data has been inserted', data: data });
};

// get all purchase orders
const getAllOrder = (req, res) => {
  let selectQuery = `SELECT * FROM store`;
  db.query(selectQuery, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
};

// get purchase order by id
const getOrder = (req, res) => {
  let selectQueryById = `SELECT * FROM store WHERE id = ?`;
  let id = req.params.orderId;

  db.query(selectQueryById, id, function (error, results, fields) {
    if (error) throw error;
    res.json(results);
  });
};

// Delet purchase order by id
const deleteOrder = (req, res) => {
  let deleteQuery = `DELETE FROM store WHERE id = ?`;
  let id = [req.params.orderId];

  db.query(deleteQuery, id, function (err, deleted) {
    if (err) throw err;
  });
  res.send({ message: 'Data has been deleted' });
};

module.exports = { insertOrder, getAllOrder, getOrder, deleteOrder };
