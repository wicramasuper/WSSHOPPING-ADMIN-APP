const router = require('express').Router();
const Category = require('../../models/admin-inventory/Category');

//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get('/', (req, res) => {
        Category.find((err, docs) => {
                res.json(docs);
               
        });
});



//@desc   GET a Category by id from db
//@route  GET /api/Categorys/:id
//@access Public
// router.get('/:id', (req, res) => {
//         Category.findById(req.params.id)
//                .then((category) => res.json(category))
//                .catch((err) => res.status(400).json("Error:" + err))
// });

//@desc   Add product to db
//@route  POST /api/products
//@access Public

// router.post("/add", (req, res) => {
//         const newProduct = new Product(req.body);
//         newProduct.save().then((product) => res.json(product));
// });

//@desc   Update product from db
//@route  POST /api/products/update/:id
//@access Public

// router.post("/update/:id", (req, res) => {
//         Product.findByIdAndUpdate(req.params.id).then((product) => {
//                 console.log(product);
//                 (req.body.productName ? product.productName = req.body.productName : null),
//                         (req.body.description ? product.description = req.body.description : null),
//                         (req.body.countInStock != 0 ? product.countInStock = Number(req.body.countInStock) : null),
//                         (req.body.price != 0 ? product.price = Number(req.body.price) : null),
//                         (req.body.date ? product.date = Date(req.body.date) : null),
//                         // (req.body.imageUrl ? product.imageUrl = req.body.imageUrl : null),
//                         (req.body.supplierId ? product.supplierId = req.body.supplierId : null);
//                         (req.body.branch ? product.branch = req.body.branch : null);
//                 product.save().then(() => res.json(product)).catch((err) => res.json(err));
//         }).catch((err) => res.json(err));
// });

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
// router.delete("/:id", (req, res) => {
//         Product.findByIdAndDelete(req.params.id)
//                 .then((product) =>
//                         res.json(
//                                 product.id
//                         )).catch((err) => res.status(400).json("Error: " + err));
//         console.log(res.data);
// })
// router.post("/updateMany",(req,res)=>{
//         Product.insertMany([...req.body]).then((product)=>{
//                 res.json(product).catch((err)=>res.json(err))
//         }).catch((err)=>{
//                 console.log(err)
//         })
// })
module.exports = router;
