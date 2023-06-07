import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  updateUserDetails,
  getAllUsers,
  deleteUser,
  updateUserRole,
  getSingleUser,
} from "../controllers/userController.js";
import {
  isAuthenticatedUser,
  authRoles,
} from "../middleware/AuthMiddleware.js";
const router = express.Router();
router.post("/user/new", registerUser);
router.post("/user/login", loginUser);
router.get("/user/me", isAuthenticatedUser, getUserDetails);
router.put("/user/update", isAuthenticatedUser, updateUserDetails);
router.get("/user/logout", logoutUser);
router.get(
  "/admin/users/all",
  isAuthenticatedUser,
  authRoles("admin"),
  getAllUsers
);
router.get(
  "/admin/user/:id",
  isAuthenticatedUser,
  authRoles("admin"),
  getSingleUser
);
router.delete(
  "/admin/user/:id",
  isAuthenticatedUser,
  authRoles("admin"),
  deleteUser
);
router.put(
  "/admin/user/:id",
  isAuthenticatedUser,
  authRoles("admin"),
  updateUserRole
);
export default router;
