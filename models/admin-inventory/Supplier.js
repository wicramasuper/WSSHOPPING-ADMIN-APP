const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//-----create schema to products----//
const supplierSchema = new Schema({

    // supplierId:{
    //     type : String,
    //     require :true
    // },

    supplierName : {
        type : String,
        required :true
    },

    supplierEmail:{
        type : String,
        require :true
    },

    phoneNumber: {
        type: Number,
        // maxLength:10,
        required: true
    },
    productType: {
        type: Array,
        required: true
    },

    supplierType: {
        type: String,
        required: true
    },

    supplierItemType: {
        type: String,
        required: true
    },

    location:{
        type: String,
        required: true
    },

    branchWillingToSupply:{
        type: String,
        required: true
    },

    date:{
        type: String,
        default: new Date()
    },

},
{
    timestamps: true
})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;