import express from 'express'
import { getProduct, getProducts, createProduct, deleteProduct, udpateProduct } from '../controllers/Products.js';
const productRouter = express.Router();


productRouter.get("/",getProducts)

productRouter.get("/:id", getProduct)

productRouter.post("/",createProduct)

productRouter.put("/:id", udpateProduct)

productRouter.delete("/:id",deleteProduct)

export default productRouter;