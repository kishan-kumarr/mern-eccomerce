const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizedRole } = require("../middleware/auth");

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getSingleProductReviews,
  deleteReview,
} = require("../controllers/productController");

router
  .route("/product")
  .post(isAuthenticatedUser, authorizedRole, createProduct);
router.route("/products").get(getAllProducts);
// router.route("/products").get(isAuthenticatedUser, getAllProducts);
router
  .route("/product/:id")
  .get(getProductDetails)
  .put(isAuthenticatedUser, authorizedRole, updateProduct)
  .delete(isAuthenticatedUser, authorizedRole, deleteProduct);
router.put("/review", isAuthenticatedUser, createProductReview);

router
  .get("/reviews", getSingleProductReviews)
  .delete("/reviews", isAuthenticatedUser, deleteReview);

module.exports = router;
