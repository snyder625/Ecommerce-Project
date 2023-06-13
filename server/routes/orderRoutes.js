import express from "express";
import {
  getAllOrders,
  getAllOrdersToBeRewarded,
  getOrder,
  getOrderByUser,
  postOrder,
  updateOrder,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.get("/rewardedOrders", getAllOrdersToBeRewarded);
router.post("/", postOrder);
router.get("/myorders/:userId", getOrderByUser);
router.put("/:id", updateOrder);
router.get("/:id", getOrder);
router.delete("/:userId", getOrderByUser);

export default router;
