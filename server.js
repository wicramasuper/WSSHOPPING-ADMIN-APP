const express = require('express');
const app = express();
const mongoose = require('mongoose');



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const morgan = require('morgan');
const cors = require('cors');



require('dotenv').config();

const port = process.env.PORT || 9000;

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
