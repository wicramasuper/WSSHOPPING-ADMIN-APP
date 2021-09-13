const router = require('express').Router();
const Supplier = require('../../models/admin-inventory/supplier');



//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get('/', (req, res) => {
        Supplier.find((err, docs) => {
                res.json(docs);
        });
});

//@desc   GET a product by id from db
//@route  GET /api/products/:id
//@access Public
router.get('/:id', (req, res) => {
        Supplier.findById(req.params.id)
               .then((supplier) => res.json(supplier))
               .catch((err) => res.status(400).json("Error:" + err))
});


//@desc   Add product to db
//@route  POST /api/products
//@access Public
router.post("/add", (req, res) => {
        const newSupplier = new Supplier(req.body);
        newSupplier.save().then((supplier) => res.json(supplier));
});

//@desc   Update product from db
//@route  POST /api/products/update/:id
//@access Public
// router.put('/updateSup/:id', (req, res) => {

//         Supplier.findByIdAndUpdate(req.params.id,{
//                 $set:req.body
//         },
//         (err,supplier)=>{
//                 if(err){
//                         return res.status(400).json({error:err})
//                 }else{
//                         success:"updated Successfully"
//                 }
//         }

//         )
       
//  });

// router.route("/updateSup/:id").put(async(req,res)=>{
//         let _id =req.params.id;
//         const{supplierName,supplierEmail,phoneNumber,productType,supplierType,supplierItemType,location,branchWillingToSupply,date}=req.body;

//         const updateSupplier ={
//                 _id,
//                 supplierName,
//                 supplierEmail,
//                 phoneNumber,
//                 productType,
//                 supplierType,
//                 supplierItemType,
//                 location,
//                 branchWillingToSupply,
//                 date
//         }
//         const updateSupp =await updateSupplier.findByIdAndUpdate(_id, updateSupplier)
//         res.status(200).send({data :updateSupp});
// })

router.put("/updateSup/:id", (req, res) => {
        Supplier.findByIdAndUpdate(req.params.id).then((supplier) => {
                console.log(supplier);
                (req.body.supplierName ? supplier.supplierName = req.body.supplierName : null),
                (req.body.supplierEmail ? supplier.supplierEmail = req.body.supplierEmail : null);
                (req.body.phoneNumber != 0 ? supplier.phoneNumber = Number(req.body.phoneNumber) : null),
                (req.body.productType ? supplier.productType= req.body.productType: null);
                (req.body.supplierType ? supplier.supplierType= req.body.supplierType: null);
                (req.body.supplierItemType ? supplier.supplierItemType= req.body.supplierItemType: null);
                (req.body.location ? supplier.location= req.body.location: null);
                (req.body.branchWillingToSupply ? supplier.branchWillingToSupply= req.body.branchWillingToSupply: null);
                (req.body.date ? supplier.date = Date(req.body.date) : null),
                // (req.body.imageUrl ? supplier.imageUrl = req.body.imageUrl : null),
                supplier.save().then(() => res.json(supplier)).catch((err) => res.json(err));
        }).catch((err) => res.json(err));
});



//@desc   Delete product
//@route  DELETE /api/products
//@access Public


// router.delete("/:id", (req, res) => {
//         Supplier.findByIdAndDelete(req.params.id)
//                 .then((supplier) =>
//                         res.json(
//                                 supplier.id
//                         )).catch((err) => res.status(400).json("Error: " + err));
//         console.log(res.data);


        router.route("/deleteSup/:id").delete(async(req, res) => {
                try{
                        const id =req.params.id;
                        const removeSupplier =await Supplier.findByIdAndDelete(id)
                        
                        res.status(200).send({data : removeSupplier});
                        

                        }catch(err){
                      res.status(400).send({data : err});
                        }
})
// router.post("/updateMany",(req,res)=>{
//         Product.insertMany([...req.body]).then((product)=>{
//                 res.json(product).catch((err)=>res.json(err))
//         }).catch((err)=>{
//                 console.log(err)
//         })
// })
module.exports = router;