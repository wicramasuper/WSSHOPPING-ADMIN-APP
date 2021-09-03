const mongoose = require('mongoose');

//insert a new product 

const productSchema = new mongoose.Schema({


    
    item_code:{
        type: 'string',
        required: true,
        maxLength:10,
        unique:true
                
    },

    item_name:{
        type: 'string',
        required: true,
        maxLength:200,
        trim: true
    },

    item_category:{
        type: 'string',
        required: true

    },

    item_image:{
        data:Buffer,
        contentType: String
    },

    item_type:{
        type: 'string',
        default: 'Repack'
    },

    item_quantity:{
        type: 'number',
    },

    item_weight:{
        type: 'string',
        default:"KG"
    },

    item_price:{
        type: 'number',
        default:"0",
        required: true
    },

    item_description:{
        type: 'string',
        required: true,
        maxLength:2000,
        trim: true
    }


},{timestamps:true});

module.exports = mongoose.model("web-product",productSchema);