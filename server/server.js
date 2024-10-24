require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

cors({
  origin: process.env.CLIENT_URL,
  methods: ["POST", "GET", "UPDATE", "PUT", "DELETE"],
  allowedHeaders: ["Content-type", "Authorization"],
});

//Database Connection

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connection succesful"))
  .catch((e) => console.log("connection unsuceesfull..." + e.message));






  // Error-handling middleware (should be at the end)
  // this is globale error handler route it can access the error from anywhere

  app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).json({
        succes:false,
        message:err.message
    })
  })

  app.listen(PORT,()=>console.log("server is now running on port:"+PORT))
