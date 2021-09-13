const router = require('express').Router();
const Product = require('../../models/admin-inventory/Product');

//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get('/', (req, res) => {
        Product.find((err, docs) => {
                res.json(docs);
        });
});

//@desc   GET a product by id from db
//@route  GET /api/products/:id
//@access Public
router.get('/:id', (req, res) => {
        Product.findById(req.params.id)
               .then((product) => res.json(product))
               .catch((err) => res.status(400).json("Error:" + err))
});

//@desc   Add product to db
//@route  POST /api/products
//@access Public
router.post("/add", (req, res) => {
        const newProduct = new Product(req.body);
        newProduct.save().then((product) => res.json(product));
});

//@desc   Update product from db
//@route  POST /api/products/update/:id
//@access Public

router.post("/update/:id", (req, res) => {
        Product.findByIdAndUpdate(req.params.id).then((product) => {
                console.log(product);
                (req.body.productName ? product.productName = req.body.productName : null),
                        (req.body.description ? product.description = req.body.description : null),
                        (req.body.countInStock != 0 ? product.countInStock = Number(req.body.countInStock) : null),
                        (req.body.price != 0 ? product.price = Number(req.body.price) : null),
                        (req.body.date ? product.date = Date(req.body.date) : null),
                        // (req.body.imageUrl ? product.imageUrl = req.body.imageUrl : null),
                        (req.body.supplierId ? product.supplierId = req.body.supplierId : null);
                        (req.body.branch ? product.branch = req.body.branch : null);
                product.save().then(() => res.json(product)).catch((err) => res.json(err));
        }).catch((err) => res.json(err));
});

// router.post("/update/:id", (req, res) => {
//         Product.findByIdAndUpdate(req.params.id).then((product) => {
//                 console.log(product);
//                 (req.body.productId ? product.productId = req.body.productId : null);
//                 (req.body.productName ? product.productName = req.body.productName : null),
//                 (req.body.supplierId ? product.supplierId = req.body.supplierId : null);
//                 // (req.body.description ? product.description = req.body.description : null),
//                 (req.body.leadTime != 0 ? product.leadTime = Number(req.body.leadTime) : null),
//                 (req.body.avgDailyUsage != 0 ? product.avgDailyUsage = Number(req.body.avgDailyUsage) : null),
//                 (req.body.avgMonthlyUsage != 0 ? product.avgMonthlyUsage = Number(req.body.avgMonthlyUsage) : null),
//                 (req.body.MaximumDailyUsage != 0 ? product.MaximumDailyUsage = Number(req.body.MaximumDailyUsage) : null),
//                 (req.body.leadTimeDemand != 0 ? product.leadTimeDemand = Number(req.body.leadTimeDemand) : null),
//                 (req.body.safteyStock != 0 ? product.safteyStock = Number(req.body.safteyStock) : null),
//                 (req.body.reorderPoint != 0 ? product.reorderPoint = Number(req.body.reorderPoint) : null),
//                 (req.body.currentStockLevel != 0 ? product.currentStockLevel = Number(req.body.currentStockLevel) : null),
//                 (req.body.price != 0 ? product.price = Number(req.body.price) : null),                      
//                 // (req.body.date ? product.date = Date(req.body.date) : null),
//                 // (req.body.imageUrl ? product.imageUrl = req.body.imageUrl : null),
//                 product.save().then(() => res.json(product)).catch((err) => res.json(err));
//         }).catch((err) => res.json(err));
// });



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
router.delete("/:id", (req, res) => {
        Product.findByIdAndDelete(req.params.id)
                .then((product) =>
                        res.json(
                                product.id
                        )).catch((err) => res.status(400).json("Error: " + err));
        console.log(res.data);
})
// router.post("/updateMany",(req,res)=>{
//         Product.insertMany([...req.body]).then((product)=>{
//                 res.json(product).catch((err)=>res.json(err))
//         }).catch((err)=>{
//                 console.log(err)
//         })
// })
module.exports = router;


// const router = require("express").Router();
// let Product = require('../../models/admin-inventory/Product');

// // router.route("/add").post((req,res) =>{

// //     const name =req.body.name;
// //     const price = Number(req.body.price);
// //     const quantity =Number(req.body.quantity);

// //     const newProduct = new Product({
// //         name,
// //         price,
// //         quantity
// //     })

// //     newProduct.save().then(()=>{
// //         res.json("Product Added")
// //     }).catch((err)=>{
// //         console.log(err);
// //     })

// // })

// router.route("/").get((req,res)=>{
//     Product.find().then((products)=>{
//         res.json(products)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })

// router.route("/update/:id").put(async(req, res) =>{
//     let productId = req.params.id;
//     const {name ,price ,quantity} = req.body;

//     const updateProduct ={
//         name,
//         price,
//         quantity
//     }
    
//     const update = await Product.findByIdAndUpdate(productId,updateProduct).then(() =>{
//     res.status(200).send({status: "Product update"})
//     }).catch((err) =>{
//         console.log(err);
//         res.status(500).send({status: "Error with updating product data", error: err.message});
//     })
// })

// router.route("/delete/:id").delete(async(req,res) => {
//   let productId =req.params.id;

//   await Product.findByIdAndDelete(productId)
//     .then(() =>{
//         res.status(200).send({status: "Product deleted"});
//     }).catch((err) =>{
//         console.log(err.message);
//         res.status(500).send({status: "Error with delete product", error: err.message});
//     })
// })

// router.route("/get/:id").get(async(req,res) => {
//     let productId=req.params.id;
//     const product = await Product.findById(productId)
//     .then((product) =>{
//         res.status(200).send({status:"User fetched",product})
//     }).catch((err)=>{
//         console.log(err.message);
//         res.status(500).send({status:"Error with get product",error :err.message});
//     })
// })

// module.exports= router;
