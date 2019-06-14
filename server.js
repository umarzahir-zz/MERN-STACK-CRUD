const express = require('express');
const app = express();
const mongoose = require('mongoose');
const api = require('./Router/api')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use("/api",api)

app.use((err,req,res,next)=>{
    res.send(err.message)
})

const db = 'mongodb://localhost/testDb';

app.get("/",(req,res)=>
{
    res.send("from server page")
})

mongoose.connect(db,{ useNewUrlParser: true });

mongoose.connection.once("open",()=> console.log('mongodb is connected'))
.on("error",()=> console.log('error..! mongodb is not connected.'))

const port  = process.env.PORT || 5000
app.listen(port, ()=> console.log("server listing on port 5000") )