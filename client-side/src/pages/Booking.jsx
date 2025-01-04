import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingPopup from '../components/BookingPopup';


export default function Booking() {
    const [selectedTime, setSelectedTime] = useState("");
    const [timeArray, setTimeArray] = useState([]);
    const [popUp, setPopUp] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        date: "",
        time: "",
        guests: 1,
    });

    //time slots
    const timeSlots = [
        "8:30 PM",
        "8:45 PM",
        "9:00 PM",
        "9:15 PM",
        "9:30 PM",
        "9:45 PM",
        "10:00 PM",
        "10:15 PM",
        "10:30 PM",
        "10:45 PM",
        "11:00 PM",
        "11:15 PM",
        "11:30 PM",
    ];

    // for prefetching data
    useEffect(() => {
        fetchBookings();
    }, []);

    async function fetchBookings() {
        try {
            const response = await axios.get("/getbooking");
            const fetchBooking = response.data.data;
            const currtimeArray = fetchBooking.map((times) => times.time);
            setTimeArray(currtimeArray);
        } catch (error) {
            //console.log(error);
        }
    }

    // function for handling change in form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    //sending data to backend
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            formData.time = selectedTime;
           // console.log("This is form data", formData);

            const response = await axios.post(`/createbooking`, formData);
            fetchBookings();

            setPopUp(true);
            //console.log(response);
        } catch (error) {
            //console.log("This is status", error.response.status);
            if (error.response.status === 400) {
                alert("This slot is already booked");
            }
        }
    }

    return (
        <div>
            {popUp && <BookingPopup data={formData} onClose={() => setPopUp(false)} />}
            <div className="container w-50 my-5">
                <div className="form">
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="box">
                            <label htmlFor="validationDefault01" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault01"
                                name="name"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="box">
                            <label htmlFor="validationDefault02" className="form-label">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault03"
                                name="email"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="box">
                            <label htmlFor="validationDefault02" className="form-label">Contact</label>
                            <input
                                type="text"
                                className="form-control"
                                id="validationDefault03"
                                name="contact"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="box">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="validationDefault03"
                                name="date"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="box">
                            <label htmlFor="date">Time</label>
                            <p>Choose an available time slot</p>
                            <div className="time-slots">
                                {timeSlots.map((slot, index) => (
                                    <button
                                        key={index}
                                        className={`time-slot-button ${timeArray.includes(slot) ? 'disabled' : selectedTime === slot ? 'selected' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSelectedTime(slot);
                                        }}
                                        type="button"
                                        disabled={timeArray.includes(slot)}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="box">
                            <label htmlFor="validationDefault01" className="form-label">No. of Guests</label>
                            <select
                                className="form-select"
                                name="guests"
                                aria-label="Default select example"
                                onChange={handleChange}
                            >
                                <option defaultValue>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <br />
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
