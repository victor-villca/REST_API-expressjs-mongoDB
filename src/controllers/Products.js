import Product from "../models/Product.js";

const getProducts =  async(req, res) =>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProduct =  async (req, res) =>{
    try {
        const {id} = req.params;
        const prodcut = await Product.findById(id);
        res.status(200).json(prodcut);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const createProduct = async (req, res) =>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const udpateProduct =  async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product){
            return res.status(400).json({message: `can not find product with id ${id}`})
        }
        res.status(200).json(await Product.findById(id))
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProduct =  async (req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product){
            return res.status(400).json({message: `can not find product with id ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export {getProduct, getProducts, createProduct, udpateProduct, deleteProduct};