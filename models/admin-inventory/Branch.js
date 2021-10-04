const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//-----create schema to products----//
const branchSchema = new Schema({

    branchName:{
        type: String,
        required: true
    },
    registereddate:{
        type: String,
        default: new Date()
    },
    branchTell:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    // imageUrl:{
    //     type: String,
    // },  

},
{
    timestamps: true
})

const Branch = mongoose.model("Branch",branchSchema);

module.exports = Branch;