const express = require("express");
const router = express.Router();
const { isAuthenticatedUser, authorizedRole } = require("../middleware/auth");
const {
  userRegister,
  userLogin,
  forgotPassword,
  resetPassword,
  logout,
  getUserDetails,
  changeUserPassword,
  updateUserProfile,
  getAllUsers,
  deleteUser,
  updateUserProfileByADmin,
  getUserDetailsByAdmin,
} = require("../controllers/userController");

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/forgot/password", forgotPassword);
router.put("/reset/password/:token", resetPassword);
router.get("/logout", logout);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/change-password", isAuthenticatedUser, changeUserPassword);
router.put("/update-profile", isAuthenticatedUser, updateUserProfile);
router.get("/user-list", isAuthenticatedUser, authorizedRole, getAllUsers);
router.delete(
  "/user-delete/:id",
  isAuthenticatedUser,
  authorizedRole,
  deleteUser
);
router.put(
  "/user-update/:id",
  isAuthenticatedUser,
  authorizedRole,
  updateUserProfileByADmin
);
router.get(
  "/user-details/:id",
  isAuthenticatedUser,
  authorizedRole,
  getUserDetailsByAdmin
);

module.exports = router;
