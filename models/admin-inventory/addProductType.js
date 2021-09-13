const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//-----create schema to products----//
const producttypeSchema = new Schema({

    productType:{
        type: Array,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: new Date()
    },
    // imageUrl:{
    //     type: String,
    // },
  

},
{
    timestamps: true
})

const addProductType = mongoose.model("addProductType",producttypeSchema);

module.exports = addProductType;