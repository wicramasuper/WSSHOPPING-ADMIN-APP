const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//-----create schema to products----//
const productSchema = new Schema({

    // productId:{
    //     type : String,
    //     require :true
    // },

    // productName : {
    //     type : String,
    //     required :true
    // },

    // supplierId:{
    //     type : Array,
    //     require :true
    // },

    // branch: {
    //     type: String,
    //     required: true
    // },

    // leadTime: {
    //     type: Number,
    //     required: true
    // },

    // avgDailyUsage: {
    //     type: Number,
    //     required: true
    // },

    // avgMonthlyUsage: {
    //     type: Number,
    //     required: true
    // },

    // MaximumDailyUsage: {
    //     type: Number,
    //     required: true
    // },

    // leadTimeDemand: {
    //     type: Number,
    //     required: true
    // },

    // safetyStock: {
    //     type: Number,
    //     required: true
    // },

    // reorderPoint: {
    //     type: Number,
    //     required: true
    // },

    // currentStockLevel: {
    //     type: Number,
    //     required: true
    // },

    // price:{
    //     type: Number,
    //     required: true
    // },

    // date:{
    //     type: Date,
    //     default: new Date()
    // },

    // imageUrl:{
    //     type: String,
    // },

    productName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    price:{
        type: Number,
        required: true

    },
    date:{
        type: Date,
        default: new Date()
    },
    // imageUrl:{
    //     type: String,
    // },
    supplierId:{
        type: Array,
        required: true
    },
    branch:{
        type: String,
        required: true
    }

},
{
    timestamps: true
})

const Product = mongoose.model("Product",productSchema);

module.exports = Product;