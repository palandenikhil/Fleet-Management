import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";

function HubSelection() {
  const [hubs, setHubs] = useState([]);
  const [selectedHub, setSelectedHub] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { searchType, searchValue } = location.state || {};

  useEffect(() => {
    if (!searchValue) {
      setError("No City ID or Airport Code provided.");
      setLoading(false);
      return;
    }

    const fetchHubs = async () => {
      setLoading(true);
      setError(null);
      const url =
        searchType === "city"
          ? `http://localhost:8080/api/hubs/city/${searchValue}`
          : `http://localhost:8080/api/hubs/airportcode/${searchValue}`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        setHubs(await response.json());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHubs();
  }, [searchType, searchValue]);

  const handleContinue = () => {
    if (!selectedHub) {
      alert("Please select a hub.");
      return;
    }
    navigate("/vehicle-selection", { state: { selectedHub } });
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center">Select Hub</h2>
      {loading && <Spinner animation="border" role="status" className="d-block mx-auto" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!loading && !error && (
        <Form>
          {hubs.map((hub) => (
            <Form.Check
              key={hub.hubId}
              type="radio"
              name="hub"
              label={`${hub.hubName} - ${hub.hubAddress} (${hub.contactNumber})`}
              onChange={() => setSelectedHub(hub)}
              className="mb-2"
            />
          ))}
          <Button 
            variant="primary" 
            onClick={handleContinue} 
            disabled={!selectedHub} 
            className="mt-3 d-block mx-auto"
          >
            Continue
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default HubSelection;





// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// function HubSelection() {
//   const [hubs, setHubs] = useState([]);
//   const [selectedHub, setSelectedHub] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const navigate = useNavigate();
//   const location = useLocation();
//   const { searchType, searchValue } = location.state || {};

//   useEffect(() => {
//     if (!searchValue) {
//       setError("No City ID or Airport Code provided.");
//       setLoading(false);
//       return;
//     }

//     const fetchHubs = async () => {
//       setLoading(true);
//       setError(null);
//       const url = searchType === "city"
//         ? `http://localhost:8080/api/hubs/city/${searchValue}`
//         : `http://localhost:8080/api/hubs/airportcode/${searchValue}`;

//       try {
//         const response = await fetch(url);
//         //const response =
//         if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//         setHubs(await response.json());
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHubs();
//   }, [searchType, searchValue]);

//   const handleContinue = () => {
//     if (!selectedHub) {
//       alert("Please select a hub.");
//       return;
//     }
//     navigate("/vehicle-selection", { state: { selectedHub } });
//   };

//   return (
//     <div>
//       <h2>Select Hub</h2>
//       {loading && <p>Loading hubs...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//       {hubs.map((hub) => (
//         <label key={hub.hubId}>
//           <input type="radio" name="hub" value={hub.hubId} onChange={() => setSelectedHub(hub)} />
//           {hub.hubName} - {hub.hubAddress} ({hub.contactNumber})
//         </label>
//       ))}
//       <button onClick={handleContinue} disabled={!selectedHub}>Continue</button>
//     </div>
//   );
// }

// export default HubSelection;





// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function HubSelection() {
//   const [searchType, setSearchType] = useState("city"); // Default search by city
//   const [searchValue, setSearchValue] = useState("");
//   const [hubs, setHubs] = useState([]);
//   const [selectedHub, setSelectedHub] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const fetchHubs = async () => {
//     if (!searchValue.trim()) {
//       alert("Please enter a valid City ID or Airport Code.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     const url = searchType === "city"
//       ? `http://localhost:8080/api/hubs/city/${searchValue}`
//       : `http://localhost:8080/api/hubs/airportcode/${searchValue}`;

//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setHubs(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSelect = (hub) => {
//     setSelectedHub(hub);
//   };

//   const handleContinue = () => {
//     if (!selectedHub) {
//       alert("Please select a hub.");
//       return;
//     }
//     navigate("/booking", { state: { selectedHub } });
//   };

//   return (
//     <div>
//       <h2>Hub Selection</h2>

//       {/* Search Type Selection */}
//       <div>
//         <label>
//           <input
//             type="radio"
//             value="city"
//             checked={searchType === "city"}
//             onChange={() => setSearchType("city")}
//           />
//           Search by City ID
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="airport"
//             checked={searchType === "airport"}
//             onChange={() => setSearchType("airport")}
//           />
//           Search by Airport Code
//         </label>
//       </div>

//       {/* Input Field */}
//       <input
//         type="text"
//         placeholder={searchType === "city" ? "Enter City ID" : "Enter Airport Code"}
//         value={searchValue}
//         onChange={(e) => setSearchValue(e.target.value)}
//       />
//       <button onClick={fetchHubs}>Search</button>

//       {loading && <p>Loading hubs...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {/* Display Hubs */}
//       {hubs.length > 0 && (
//         <table>
//           <thead>
//             <tr>
//               <th>Hub Name</th>
//               <th>Hub Address</th>
//               <th>Contact Number</th>
//               <th>Select</th>
//             </tr>
//           </thead>
//           <tbody>
//             {hubs.map((hub) => (
//               <tr key={hub.hubId}>
//                 <td>{hub.hubName}</td>
//                 <td>{hub.hubAddress}</td>
//                 <td>{hub.contactNumber}</td>
//                 <td>
//                   <button onClick={() => handleSelect(hub)}>Select</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Navigation Buttons */}
//       <button onClick={handleContinue}>Continue</button>
//       <button onClick={() => navigate("/home")}>Cancel</button>
//     </div>
//   );
// }

// export default HubSelection;








// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// function HubSelection() {
//   const [hubs, setHubs] = useState([]);
//   const [selectedHub, setSelectedHub] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Get City ID or Airport Code from previous page
//   const { cityId, airportCode } = location.state || {};

//   useEffect(() => {
//     if (!cityId && !airportCode) {
//       setError("No City ID or Airport Code provided.");
//       setLoading(false);
//       return;
//     }

//     const fetchHubs = async () => {
//       setLoading(true);
//       setError(null);

//       const url = cityId
//         ? `http://localhost:8080/api/hubs/city/${cityId}`
//         : `http://localhost:8080/api/hubs/airportcode/${airportCode}`;

//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setHubs(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHubs();
//   }, [cityId, airportCode]);

//   const handleSelect = (hub) => {
//     setSelectedHub(hub);
//   };

//   const handleContinue = () => {
//     if (!selectedHub) {
//       alert("Please select a hub.");
//       return;
//     }
//     navigate("/booking", { state: { selectedHub } });
//   };

//   return (
//     <div>
//       <h2>Hub Selection</h2>

//       {loading && <p>Loading hubs...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}

//       {hubs.length > 0 ? (
//         <form>
//           {hubs.map((hub) => (
//             <div key={hub.hubId}>
//               <label>
//                 <input
//                   type="radio"
//                   name="hub"
//                   value={hub.hubId}
//                   onChange={() => handleSelect(hub)}
//                 />
//                 {hub.hubName} - {hub.hubAddress} ({hub.contactNumber})
//               </label>
//             </div>
//           ))}
//         </form>
//       ) : (
//         !loading && <p>No hubs available.</p>
//       )}

//       <button onClick={handleContinue} disabled={!selectedHub}>
//         Continue
//       </button>
//       <button onClick={() => navigate("/home")}>Cancel</button>
//     </div>
//   );
// }

// export default HubSelection;
