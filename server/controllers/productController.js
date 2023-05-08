import mongoose from "mongoose";
import Product from "../models/ProductModel.js";


export const addProduct = async (req, res) => {
    const newProduct = await Product(req.body);

    try {
        await newProduct.save();
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const allProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const specificProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id);
        await product.updateOne({$set: req.body});
        res.status(200).json("Producct Deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id)
        await product.deleteOne(id);
        res.status(200).json("Product Deleted!");
    } catch (error) {
        res.status(500).json(error);
    }
};