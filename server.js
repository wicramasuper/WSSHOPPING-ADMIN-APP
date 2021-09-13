const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
//validations
const expressValidator = require('express-validator');

const port = process.env.PORT || 9000;
//middleware
const morgan = require('morgan');
const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(expressValidator());


//import the routes
const productRoute = require('./routes/admin-inventory/products');
const supplierRoute = require('./routes/admin-inventory/supplier');
const orderRoute = require('./routes/admin-inventory/order');
const contractRoute = require('./routes/admin-inventory/contract');
const addProductTypeRoute = require('./routes/admin-inventory/addNewProductTypeRoutes');
const PORoute = require('./routes/admin-inventory/POroutes');


//routes middlware
app.use("/product",productRoute);
app.use("/supplier",supplierRoute);
app.use("/order",orderRoute);
app.use("/contract",contractRoute);
app.use("/addProductType",addProductTypeRoute);
app.use("/poroutes",PORoute);



mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("database connection established");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
