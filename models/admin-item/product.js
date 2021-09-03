const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({


    item_code:{
        type:'string',
        required: true,
        maxLength: 4,
        unique:true
    },

    item_name: {
        type:'string',
        required: true,
        trim:true,
        maxlength:200
    },

    item_category: {
        type:'string',
        required: true,
        trim:true

    },

    item_type: {
        type:'string',
        required: true,
        default: 'Repack'
    },

    item_quantity: {
        type:'string',
        default: '0'
    },

    item_weight: {
        type:'string',
        default:'kilo'
    },

    item_image:{
        data:Buffer,
        contentType:String

    },

    item_price:{
        type:'string',
        default:'0'
    },

    item_description: {
        type:'string',
        required: true,
        trim:true,
        maxlength:2000
    },

    



    
    },{timestamps:true});
    
    module.exports = mongoose.model("web-products",productSchema);