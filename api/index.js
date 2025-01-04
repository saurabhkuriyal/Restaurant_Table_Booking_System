const express=require("express");
const connection=require("./utils/db");
const bodyParser = require("body-parser");
const booking=require("./routers/booking.routes");
const cors=require("cors");
const app=express();

const port=3000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.use(booking);

//listening port
connection().then(() => {
    app.listen(port,()=>{
        console.log("BlogApp server is running");
    });
})