function BookingPopup({ onClose,data }) {

    
    const { name, email, contact, date, time, guests } = data;

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}>
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