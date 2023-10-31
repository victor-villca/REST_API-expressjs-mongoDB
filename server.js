import express from 'express'
import mongoose from 'mongoose';
import productRouter from './src/routes/Products.js';
import userRouter from './src/routes/Users.js';
import 'dotenv/config.js'
import errorMiddleware from './src/middleware/errorMiddleware.js'

const app =express();
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;


app.use(express.json());
app.use("/products", productRouter);
app.use("/users", userRouter );

app.get('/', (req, res) =>{
     res.json({message: 'Ecommerce - Welcome'})
});

app.use(errorMiddleware);
mongoose.connect(MONGODB_URL)

.then( ()=>{
    console.log("Succesfully connected to mongoDB");
    app.listen(PORT, ()=>console.log(`Running on http://localhost:${PORT}`))
}).catch((error) => {
    console.log(error)
})