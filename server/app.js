require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const PORT=4002;
require('./db/conn');
const router=require('./Routes/router');
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT,()=>{
    console.log(`Server start at Port No:${PORT}`)
})