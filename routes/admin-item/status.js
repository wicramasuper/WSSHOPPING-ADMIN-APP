const express = require('express');
const router = express.Router();

const {orderStatus} = require('../../controllers/admin-item/status');
router.post('/admin/orderStatus',orderStatus);

module.exports = router;