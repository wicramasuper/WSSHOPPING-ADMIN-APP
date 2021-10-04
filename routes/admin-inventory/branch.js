const router = require('express').Router();
const Branch = require('../../models/admin-inventory/Branch');

//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get('/', (req, res) => {
        Branch.find((err, docs) => {
                res.json(docs);
        });
});

//@desc   GET a product by id from db
//@route  GET /api/products/:id
//@access Public
router.get('/:id', (req, res) => {
    Branch.findById(req.params.id)
               .then((branch) => res.json(branch))
               .catch((err) => res.status(400).json("Error:" + err))
});

//@desc   Add product to db
//@route  POST /api/products
//@access Public
router.post("/add", (req, res) => {
        const newBranch = new Branch(req.body);
        newBranch.save().then((branch) => res.json(branch));
});

//@desc   Update product from db
//@route  POST /api/products/update/:id
//@access Public
router.put("/updateBranch/:id", (req, res) => {
    Branch.findByIdAndUpdate(req.params.id).then((branch) => {
                console.log(branch);
                (req.body.branchName ? branch.branchName = req.body.branchName : null),
                (req.body.registereddate ? branch.registereddate = Date(req.body.registereddate) : null);                    
                (req.body.branchTell !=0 ? branch.branchTell = Number(req.body.branchTell) : null);                    
                (req.body.description ? branch.description = req.body.description : null),
                // (req.body.imageUrl ? product.imageUrl = req.body.imageUrl : null),
                branch.save().then(() => res.json(branch)).catch((err) => res.json(err));
                }).catch((err) => res.json(err));
});
// router.post("/updateCountInStock/:id", (req, res) => {
//         Product.findByIdAndUpdate(req.params.id).then((product) => {
//                 console.log(product);
//                 (req.body.countInStock != 0 ? product.countInStock = Number(req.body.countInStock) : null),
//                         product.save().then(() => res.json(product)).catch((err) => res.json(err));
//         }).catch((err) => res.json(err));

//         //       req.body.forEach(item => {
//         //         Product.findByIdAndUpdate(item.itemId).then((product) => {
//         //                 console.log(product);
//         //                 (item.countInStock != 0 ?product.countInStock = Number(req.body.countInStock):null),
//         //         product.save()
//         //               })  
//         // });
//         // res.json("product count update")
// })
//@desc   Delete product
//@route  DELETE /api/products
//@access Public
router.route("/deleteBranch/:id").delete(async(req, res) => {
        try{
                const id =req.params.id;
                const removeBranch =await Branch.findByIdAndDelete(id)
                
                res.status(200).send({data : removeBranch});
                

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