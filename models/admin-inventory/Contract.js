const mongoose = require('mongoose');
const schema = mongoose.Schema;

//-----create schema to order----//
const contractSchema = new schema({
   

        SupplierName:{
            type: String,
            required: true
        },

        AgreementDate:{
            type: Date,
            required:true
        },
        
        branchWillingToSupply:{
            type: Array,
            required: true
        },
        
        productType:{
            type: Array,
            required: true
    
        },
        contractPeriod:{
            type: Date,
            required: true
        },
        
        Description:{
            type:String,
            required:true
        }
     
    },
    {
        timestamps: true
    })


 const Contract= mongoose.model("Contract", contractSchema);
 module.exports=Contract;