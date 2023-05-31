import User from "../models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Register new user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPass;
    const {username} = req.body;

    const newUser = new UserModel(req.body);

    try{
        const oldUser = await UserModel.findOne({username});
        if(oldUser) {
            res.status(400).json("The Username is already taken")
        }
        const user = await newUser.save();
        const token = jwt.sign({
            username: user.username, id: user._id
        }, process.env.JWT_KEY, { expiresIn: '1h'})

        res.status(200).json({user, token});
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

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