import express from 'express'
import mongoose from 'mongoose';
import productRouter from './src/routes/Products.js';
import userRouter from './src/routes/Users.js';

const app =express();
const PORT = 5000;

app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter );

app.get('/', (req, res) => res.json({message: 'Ecommerce - Welcome'}));

mongoose.connect("mongodb+srv://admin:admin123@clusterapi.getb6wv.mongodb.net/Node-API?retryWrites=true&w=majority")

.then( ()=>{
    console.log("Succesfully connected to mongoDB");
    app.listen(PORT, ()=>console.log(`Running on http://localhost:${PORT}`))
}).catch((error) => {
    console.log(error)
})