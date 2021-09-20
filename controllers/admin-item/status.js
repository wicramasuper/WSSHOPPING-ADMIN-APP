const Status = require('../../models/admin-item/status');

//error handler in helper folder
const { errorHandler } = require('../../helpers/admin-item');


exports.orderStatus = (req,res)=>{
 
    

    //create new user based on request body
    const status = new Status(req.body);
    status.save((err,user)=>{

        if(err) {
            return res.status(400).json({
            err:errorHandler(err)
        });
        }

        //if succefully save 
        res.json({
           status
        });

        
        
});
};