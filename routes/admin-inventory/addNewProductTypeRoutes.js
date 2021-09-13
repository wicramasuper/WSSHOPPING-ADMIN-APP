const router = require('express').Router();
const addProductType = require('../../models/admin-inventory/addProductType');

//@desc   GET all products from db
//@route  GET /api/products
//@access Public
router.get('/', (req, res) => {
        addProductType.find((err, docs) => {
                res.json(docs);
        });
});

//@desc   GET a product by id from db
//@route  GET /api/products/:id
//@access Public
router.get('/:id', (req, res) => {
    addProductType.findById(req.params.id)
               .then((addProductType) => res.json(addProductType))
               .catch((err) => res.status(400).json("Error:" + err))
});

//@desc   Add product to db
//@route  POST /api/products
//@access Public
router.post("/add", (req, res) => {
        const newaddProductType = new addProductType(req.body);
        newaddProductType.save().then((addProductType) => res.json(addProductType));
});

//@desc   Update product from db
//@route  POST /api/products/update/:id
//@access Public
router.post("/update/:id", (req, res) => {
    addProductType.findByIdAndUpdate(req.params.id).then((addProductType) => {
                console.log(addProductType);
                (req.body.productType ? addProductType.productType = req.body.productType : null),
                (req.body.description ? addProductType.description = req.body.description : null);                    
                (req.body.date ? addProductType.date = Date(req.body.date) : null),
                // (req.body.imageUrl ? product.imageUrl = req.body.imageUrl : null),
                addProductType.save().then(() => res.json(addProductType)).catch((err) => res.json(err));
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
router.delete("/:id", (req, res) => {
    addProductType.findByIdAndDelete(req.params.id)
                .then((addProductType) =>
                        res.json(
                            addProductType.id
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