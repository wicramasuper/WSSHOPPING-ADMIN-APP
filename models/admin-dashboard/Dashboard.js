const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderDetails = new Schema({

    name : {
        type : String,
        required:true

    }, 

    data : {
        type : Date,
        required : true
    },

    orderNo : {
        type : String,
        required:true 
    },

    DeliveryType :{
        type : String,
        required:true 
    }, 

    serviceChargers : {
        type : Number,
        required:true 
    },


})

const Dashboard = mongoose.model("Dashboard-Detail",orderDetails);

module.exports = Dashboard;