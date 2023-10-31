import Product from "../models/Product.js";
import asyncHandler from "express-async-handler"

const getProducts = asyncHandler(
    async(req, res) =>{
        try {
            const products = await Product.find({});
            res.status(200).json(products)
        } catch (error) {
            res.status(error.status)
            throw new Error(error.message);
        }
    }
)

const getProduct =  asyncHandler(
    async (req, res) =>{
        try {
            const {id} = req.params;
            const product = await Product.findById(id);
            if (!product){
                res.status(error.status)
                throw new Error(`Can not find product with ID: ${id}`);
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(error.status)
            throw new Error(error.message);
        }
    }
)

const createProduct = asyncHandler(async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(error.status)
            throw new Error(error.message);
    }
})

const udpateProduct =  asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product){
            res.status(error.status)
            throw new Error(`Can not find product with ID: ${id}`);
        }
        res.status(200).json(await Product.findById(id))
    } catch (error) {
        res.status(error.status)
            throw new Error(error.message);
    }
})

const deleteProduct =  asyncHandler(async (req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product){
            res.status(error.status)
            throw new Error(`Can not find product with ID: ${id}`);
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(error.status)
            throw new Error(error.message);
    }
})

export {getProduct, getProducts, createProduct, udpateProduct, deleteProduct};