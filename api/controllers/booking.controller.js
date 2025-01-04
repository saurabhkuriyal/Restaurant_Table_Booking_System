const Booking=require("../models/booking.model");

async function book(req,res) {
    try {
        
        console.log(req.body);

        const newBooking= new Booking(req.body);

        await newBooking.save();
        
        console.log("hello from booking",newBooking);

        res.status(200).json({success:true})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,error})
    }
}

async function getBookings(req,res) {
    try {

        const allBookings=await Booking.find({});

        res.status(200).json({success:true,data:allBookings});
        
    } catch (error) {
        console.log(error);
        res.status(400).json({success:false,error})
        
    }
}

module.exports={
    book,
    getBookings
}