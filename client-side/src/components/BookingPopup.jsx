function BookingPopup({ onClose,data }) {

    //destructuring the data object
    const { name, email, contact, date, time, guests } = data;

    return (
        <div className="container bookingpepup">
            <div className="inner-container" >
                <h3>Booking Confirmed!</h3>
                <p>Name : {name}</p>
                <p>Contact : {contact}</p>
                <p> date: {date}</p>
                <p> time : {time}</p>
                <button
                    onClick={onClose} 
                    style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default BookingPopup;