const express = require('express');
const router = express.Router();
const {
  insertOrder,
  getAllOrder,
  getOrder,
  deleteOrder,
} = require('../controller/storeController');

router.route('/order').get(getAllOrder).post(insertOrder);
router.route('/order/:orderId').get(getOrder);
router.route('/order/:orderId').delete(deleteOrder);

module.exports = router;
