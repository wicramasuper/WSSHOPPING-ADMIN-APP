const router = require('express').Router();
const Contract = require('../../models/admin-inventory/Contract');

router.post('/add', (req, res) => {//adding orders to the database
    const contract = new Contract(req.body)
    console.log(contract);
    contract.save().then((contract) => { res.json(contract) }).catch((err) => res.json(err));
})

router.get('/',(req,res)=>{//geting all the orders in datatbase
    console.log("in in get")
    Contract.find().then((contract)=>res.json(contract)).catch((err)=>res.status(400).json("Erro" +err))
})

// router.get('/:id', (req, res) => {//geting the orders belong to a specific user
//     Contract.findById({ userId: req.params.id }).then((contract) =>{
//     console.log(contract)
//     res.json(contract)}).catch((err) => res.status(400).json("Error" + err))
//   })

  router.get('/:id', (req, res) => {
    Contract.findById(req.params.id)
           .then((contract) => res.json(contract))
           .catch((err) => res.status(400).json("Error:" + err))
});

// router.put("/updateCont/:id", (req, res) => {
//     Contract.findByIdAndUpdate(req.params.id).then((contract) => {
//       contract.status = "payment done";
  
//       contract.save().then(() => res.json("contract status updated"));
//     });
//   });

router.put("/updateCont/:id", (req, res) => {
  Contract.findByIdAndUpdate(req.params.id).then((contract) => {
          console.log(contract);
          (req.body.SupplierName ? contract.SupplierName = req.body.SupplierName : null),
          (req.body.AgreementDate ? contract.AgreementDate = Date(req.body.AgreementDate) : null),
          (req.body.branchWillingToSupply ? contract.branchWillingToSupply= req.body.branchWillingToSupply: null);
          (req.body.productType ? contract.productType= req.body.productType: null);
           (req.body.location ? contract.location= req.body.location: null);
           (req.body.contractPeriod ? contract.contractPeriod = Date(req.body.contractPeriod) : null),
           (req.body.Description ? contract.Description= req.body.Description: null);
          // (req.body.imageUrl ? supplier.imageUrl = req.body.imageUrl : null),
          contract.save().then(() => res.json(contract)).catch((err) => res.json(err));
  }).catch((err) => res.json(err));
});

//   router.delete("/delete/:id", (req, res) => {
//     Contract.findByIdAndDelete(req.params.id)
//             .then((contract) =>
//                     res.json(
//                             contract.id
//                     )).catch((err) => res.status(400).json("Error: " + err));
//     console.log(res.data);
// })

router.route("/deleteCont/:id").delete(async(req, res) => {
  try{
          const id =req.params.id;
          const removeContract =await Contract.findByIdAndDelete(id)
          
          res.status(200).send({data : removeContract});
          

          }catch(err){
        res.status(400).send({data : err});
          }
})
module.exports = router;