import { useEffect, useState } from "react";

const Handover = () => {
  const [cars, setCars] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchCarData();
    fetchBookingData();
  }, []);

  const fetchCarData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/carmaster");
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  const fetchBookingData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/bookingdetails");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching booking data:", error);
    }
  };

  return (
    <div>
      <h2>Handover Details</h2>
      <div>
        <h3>Car Details</h3>
        {cars.map((car) => (
          <div key={car.carId}>
            <p><strong>Car Name:</strong> {car.carName}</p>
            <p><strong>Number Plate:</strong> {car.numberPlate}</p>
            <p><strong>Fuel Status:</strong> {car.fuelStatus}</p>
            <p><strong>Availability:</strong> {car.isAvailable === "Y" ? "Available" : "Not Available"}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Booking Details</h3>
        {bookings.map((booking) => (
          <div key={booking.bookingId}>
            <p><strong>Booking ID:</strong> {booking.bookingId}</p>
            <p><strong>Customer Name:</strong> {booking.customerName}</p>
            <p><strong>Start Date:</strong> {booking.startDate}</p>
            <p><strong>End Date:</strong> {booking.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Handover;









// import React, { useState, useEffect } from "react";

// const HandoverPage = ({ bookingId, onClose }) => {
//   const [vehicles, setVehicles] = useState([]);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [fuelStatus, setFuelStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchAvailableVehicles();
//   }, []);

//   const fetchAvailableVehicles = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/cars");
//       const data = await response.json();
//       const availableVehicles = data.filter(car => !car.allotted); // Assuming 'allotted' field exists
//       setVehicles(availableVehicles);
//     } catch (error) {
//       console.error("Error fetching vehicles:", error);
//     }
//   };

//   const handleVehicleSelect = (vehicle) => {
//     setSelectedVehicle(vehicle);
//   };

//   const handleConfirm = async () => {
//     if (!selectedVehicle || !fuelStatus) {
//       alert("Please select a vehicle and enter fuel status.");
//       return;
//     }

//     setLoading(true);

//     try {
//       await fetch(`http://localhost:8080/api/bookingdetails/${bookingId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           vehicleId: selectedVehicle.id,
//           fuelStatus,
//           pickUpDateTime: new Date().toISOString(),
//         }),
//       });

//       await fetch(`http://localhost:8080/api/cars/${selectedVehicle.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...selectedVehicle, allotted: true }),
//       });

//       alert("Vehicle allotted successfully!");
//       onClose();
//     } catch (error) {
//       console.error("Error updating booking:", error);
//       alert("Failed to update booking.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="handover-modal">
//       <h2>Confirm Handover</h2>
//       <div>
//         <label>Select Car:</label>
//         <button onClick={fetchAvailableVehicles}>Select Car</button>
//       </div>
//       {vehicles.length > 0 && (
//         <ul>
//           {vehicles.map((car) => (
//             <li key={car.id} onClick={() => handleVehicleSelect(car)}>
//               {car.name} - {car.plateNumber}
//             </li>
//           ))}
//         </ul>
//       )}
//       {selectedVehicle && <p>Selected Car: {selectedVehicle.name}</p>}
//       <div>
//         <label>Fuel Status:</label>
//         <input
//           type="text"
//           value={fuelStatus}
//           onChange={(e) => setFuelStatus(e.target.value)}
//         />
//       </div>
//       <button onClick={handleConfirm} disabled={loading}>
//         {loading ? "Processing..." : "Done"}
//       </button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// };

// export default HandoverPage;






