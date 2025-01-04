const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact:{ type:String, required:true},
    date: { type: String, required: true },
    time: { type: String, required: true },
    // duration: { type: Number, required: true }, // Duration in minutes
    guests: { type: String, required: true, min: 1 },
}, { timestamps: true });

module.exports=mongoose.model("booking",bookingSchema);