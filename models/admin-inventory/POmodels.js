const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//-----create schema to products----//
const pomodelsSchema = new Schema({

    itemName:{
        type: Array,
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
    // imageUrl:{
    //     type: String,
    // },
  

},
{
    timestamps: true
})

const POmodels = mongoose.model("POmodels",pomodelsSchema);

module.exports = POmodels;