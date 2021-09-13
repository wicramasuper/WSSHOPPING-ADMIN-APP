const mongoose = require('mongoose');
const schema = mongoose.Schema;

//-----create schema to order----//
const orderSchema = new schema({
    product:{
        type:Array,
        require:true,

        productId:{
            type:String,
            required:true
        },

        productName:{
            type: String,
            required: true
        },
        
        qty:{
            type: Number,
            required: true
        },
        amount:{
            type: Number,
            required: true
    
        },
        
        supplierId:{
            type:String,
            required:true
        }
     },

    InventoryManagerId:{
        type:String,
        require:true
    },
    TotalAmount:{
        type:Number,
        require:true
    },
    date:{
        type: Date,
    },
    status:{
        type:String,
        require:true
    },

},
{
    timestamps: true
})


module.exports = order = mongoose.model('order', orderSchema);