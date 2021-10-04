const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//-----create schema to products----//
const categorySchema = new Schema({

    category:{
        type: String,
        required: true
    },

},
{
    timestamps: true
})

const Category = mongoose.model("web-category",categorySchema);

module.exports = Category;