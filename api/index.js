require("dotenv").config();
const express=require("express");
const connection=require("./utils/db");
const bodyParser = require("body-parser");
const booking=require("./routers/booking.routes");
const cors=require("cors");
const path = require("path");


const app=express();
const port=process.env.PORT;

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname,'dist')));


//routes
app.use(booking);

//listening port
connection().then(() => {
    app.listen(port,()=>{
        console.log("Table booking system server is running");
    });
})