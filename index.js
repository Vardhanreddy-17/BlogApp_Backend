const express = require('express');
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 4000

//middleware
app.use(express.json());

const blog = require("./routes/blog")
// //mount the api
app.use("/api/v1",blog)

const connectWithDb = require("./config/database")
connectWithDb();

//start the server
app.listen(PORT,()=>{
    console.log("server started at port 3000")
})

//
app.get("/",(req,res)=>{
    res.send("<h1>This is the blog app</h1>")
})
