const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//-----create schema to products----//
const pomodelsSchema = new Schema({

    itemName:{
        type: Array,
        // trim:true,
        // maxLength:5,
        // unique:true,
        required: true
    },
    itemPrice:{
        type: Number,
        required: true
    },
    itemQuantity:{
        type: Number,
        required: true
    },
    branch:{
        type: String,
        required: true
        
    },
    supplierName:{
        type: Array,
        required: true
    },
    
    date:{
        type: Date,
        default: new Date()
    },

    priority:{
        type: String,
        require: true
    },
    totalItemPrice:{
        type: Number,
        require: true
    },
    // imageUrl:{
    //     type: String,
    // },
  

},
// {
//     timestamps: true
// }
)

const POmodels = mongoose.model("POmodels",pomodelsSchema);

module.exports = POmodels;