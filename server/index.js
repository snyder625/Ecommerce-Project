import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import orderRoute from "./routes/orderRoutes.js";
import productRoute from "./routes/productRoutes.js";
import userRoute from "./routes/userRoutes.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(
      "mongodb+srv://admin-rizwan:Test123@cluster0.y5gay.mongodb.net/FoodDeliveryApp?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/v1", userRoute);
app.use("/products", productRoute);
app.use("/post", orderRoute);

// app.use((err, req, res, next) => {
//   const status = err.status || 500;
//   const message = err.message || "Something went wrong";
//   return res.status(status).json({
//     success: false,
//     status,
//     message,
//   });
// });

app.listen(4000, () => {
  connect();
  console.log("App is running on port 4000");
});
