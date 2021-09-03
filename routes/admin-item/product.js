const express = require('express');
const router = express.Router();

const {insert} = require('../../controllers/admin-item/product');
router.post('/admin/product/insert',insert);


module.exports = router;