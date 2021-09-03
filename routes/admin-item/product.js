const express = require('express');
const router = express.Router();


const {insert} = require('../../controllers/admin-item/product');


router.post('/product/insert',insert);

module.exports = router;