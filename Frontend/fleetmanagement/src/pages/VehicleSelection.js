// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function VehicleSelection() {
//   const [vehicles, setVehicles] = useState([]);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchVehicles() {
//       try {
//         const response = await fetch('api/cartype'); 
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setVehicles(data);
//       } catch (err) {
//         setError(err);
//         console.error("Error fetching vehicles:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchVehicles();
//   }, []);

//   const handleSelect = (vehicle) => {
//     setSelectedVehicle(vehicle);
//   };

//   const handleContinueBooking = () => {
//     if (selectedVehicle) {
//       navigate('/booking', { state: { selectedVehicle: selectedVehicle } });
//     } else {
//       alert("Please select a vehicle.");
//     }
//   };

//   if (loading) {
//     return <div>Loading vehicles...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h2>Vehicle Selection</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Car Class</th>
//             <th>Car Type</th>
//             <th>Base Rate (Daily)</th>
//             <th>Base Rate (Weekly)</th>
//             <th>Base Rate (Monthly)</th>
//             <th></th> {/* Select button column */}
//           </tr>
//         </thead>
//         <tbody>
//           {vehicles.map(vehicle => (
//             <tr key={vehicle.id}>
//               <td>{vehicle.class}</td>
//               <td>
//                 <img src={vehicle.image} alt={vehicle.type} style={{ maxWidth: '100px' }} /> {/* Car Image */}
//                 {vehicle.type}
//               </td>
//               <td>${vehicle.dailyRate}</td>
//               <td>${vehicle.weeklyRate}</td>
//               <td>${vehicle.monthlyRate}</td>
//               <td>
//                 <button onClick={() => handleSelect(vehicle)}>Select</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <button onClick={handleContinueBooking}>Continue Booking</button>
//       <button onClick={() => navigate('/home')}>Cancel</button>
//     </div>
//   );
// }

// export default VehicleSelection;