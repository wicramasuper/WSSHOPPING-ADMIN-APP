const router = require("express").Router();
const { Router } = require("express");
let Dashboard = require("../../models/admin-dashboard/Dashboard");

// add servise chargers 

router.route("/add").post((req,res) => {
   const serviceChargers = Number(req.body.serviceChargers);
   const name = req.body.name;
   const orderNo=req.body.orderNo;

   const newDashboard = new Dashboard({
        name,
        orderNo,
       serviceChargers


   })

   newDashboard.save().then(() =>{
    res.json("chargers added")

   }).catch(() =>{
       console.log(err);
   })

})

// get details what we enter

router.route("/").get((req,res)=>{

Dashboard.find().then((dashboard)=>{

    res.json(dashboard)


}).catch(() =>{
    console.log(err);
})

})

//update servise chargers 
//async await functions

router.route("/update/:id").put(async (req,res)=>{

    let orderId=req.params.id; // params=parameter
    const serviceChargers = Number(req.body.serviceChargers);

    const updateChargers = {
        serviceChargers

    }

    const update = await Dashboard.findByIdAndUpdate(orderId, updateChargers).then(()=>{

        res.status(200).send({status : "user updated" , user: update})

    }).catch(() =>{
        console.log(err);
        res.status(500).send({status : "erro with updating data"})
    })

})

// delete servise chargers

router.route("/update/:id").delete(async(req, res)=>{

    let orderId=req.params.id;

    const deleteChargers = {
        serviceChargers

    } 


     await Dashboard.findByIdAndDelete(orderId, deleteChargers).then(()=>{

        res.status(200).send({status : "chargers deleted" , user: update})

    }).catch(() =>{
        console.log(err);
        res.status(500).send({status : "erro with deleting data"})
    })

       
})






module.exports = Router;