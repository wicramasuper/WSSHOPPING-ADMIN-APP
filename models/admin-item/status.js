const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({

    username:{
        type: 'string',
        trim:true
    },
    status: {
        type: 'string',
        required:true
    }



},{timestamps:true})

module.exports = mongoose.model('order-status',statusSchema);