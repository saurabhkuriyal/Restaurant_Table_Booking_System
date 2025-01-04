const express=require("express");
const bookingController=require("../controllers/booking.controller");

const router=express.Router();


router.route("/createbooking").post(bookingController.book);

router.route("/getbooking").get(bookingController.getBookings)

module.exports=router;