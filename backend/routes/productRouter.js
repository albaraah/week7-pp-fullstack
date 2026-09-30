const express = require("express");

const{
    createProduct,
    getAllProducts,
    deleteProduct,
    getProductById,
    updateProduct
} = require("../controllers/productController");

const requireAuth = require("../middleware/requireAuth");
const router = express.Router();

router.get("/:productId", getProductById);
router.get("/", getAllProducts);

router.use(requireAuth);

router.post("/", createProduct);
router.delete("/:productId", deleteProduct);
router.put("/:productId", updateProduct);

module.exports = router;