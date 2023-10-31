import User from "../models/User.js";
import asyncHandler from "express-async-handler"
const getUsers = asyncHandler(async (req, res) => {
   try {
    const users = await User.find({});
    res.status(200).json(users);
   } catch (error) {
    res.status(error.status)
    throw new Error(error.message);
   } 
})
const getUser = asyncHandler(async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        if (!user){
            res.status(error.status)
            throw new Error(`Can not find product with ID: ${id}`);
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(error.status)
            throw new Error(error.message);
    }
})

const createUser =asyncHandler( async (req, res) =>{
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(error.status)
            throw new Error(error.message);
    }
})

const updateUser = asyncHandler(async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user){
            res.status(error.status)
            throw new Error(`Can not find product with ID: ${id}`);
        }
        const userUpdated=  await User.findById(id);
        res.status(200).json(userUpdated);
    } catch (error) {
        res.status(error.status)
            throw new Error(error.message);
    }
})
const deleteUser = asyncHandler(async (req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user){
            res.status(error.status)
            throw new Error(`Can not find product with ID: ${id}`);
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(error.status)
            throw new Error(error.message);
    }
})
export {getUser, getUsers, createUser, updateUser, deleteUser};