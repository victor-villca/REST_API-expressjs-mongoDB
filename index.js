const express = require('express');
const app =express();
const PORT = 5000;
 
app.use(express.json());

app.get("/", (req, res)=>res.send("Home"));

app.listen(PORT, ()=>console.log(`Running on http://localhost:${PORT}`))
