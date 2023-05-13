import mongoose from "mongoose";
import User from "../models/UserModel.js";

//Register new user
export const registerUser = async (req, res) => {};

//Login existing user
export const loginUser = async (req, res) => {};

//Logout the logged-in user
export const logoutUser = async (req, res) => {};

//Get specific user by ID
export const getUser = async (req, res) => {};

//Get all users, for admin dashboard
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: "Internal server error" });
      }
};