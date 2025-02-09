import React, { useState, useEffect } from 'react';
import './hub-selection.css'; // Import your CSS file
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';

const LocationSelection = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [hubs, setHubs] = useState([]);
    const [locations, setLocations] = useState([]); // Store locations from API

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('/api/hubs'); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setLocations(data); // Set the locations in state
            } 
            catch (error) {
                console.error("Error fetching locations:", error);
                // Handle error, e.g., display an error message
            }
        };

        fetchLocations();
    }, []); // Empty dependency array ensures this runs only once on mount

    useEffect(() => {
        // Fetch hubs based on the selected location
        const fetchHubs = async () => {
            if (selectedLocation) {
                try {
                    const response = await fetch(`/api/hubs?location=${selectedLocation.id}`); // API endpoint with location ID as query parameter
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setHubs(data);
                } catch (error) {
                    console.error("Error fetching hubs:", error);
                    // Handle error
                }
            } else {
                setHubs([]); // Clear hubs if no location is selected
            }
        };

        fetchHubs();
    }, [selectedLocation]); // This effect runs whenever selectedLocation changes

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
    };

    return (
        <div className="location-selection-page">
            <Navbar /> {/* Use your existing Navbar component */}
            <div className="container">
                {/* ... (rest of your layout, navigation, search) */}

                <div className="location-list">
                    {locations.map((location) => ( // Map over locations from API
                        <div
                            key={location.id}
                            className={`location-item ${selectedLocation === location ? 'selected' : ''}`}
                            onClick={() => handleLocationSelect(location)}
                        >
                            {/* ... location item content (name, details) */}
                            <input
                                type="radio"
                                name="location"
                                id={`location${location.id}`}
                                checked={selectedLocation === location}
                                onChange={() => { }}
                            />
                            <label htmlFor={`location${location.id}`}>
                                <b>{location.name}</b>
                                <br />
                                <span className="location-details">
                                    {location.address}
                                    <br />
                                    {location.phone}
                                    <br />
                                    {location.hours}
                                </span>
                            </label>
                        </div>
                    ))}
                </div>

                {/* Display hubs */}
                {selectedLocation && ( // Only show hubs if a location is selected
                    <div className="hub-list">
                        <h3>Hubs at {selectedLocation.name}</h3>
                        {hubs.length > 0 ? (
                            <ul>
                                {hubs.map((hub) => (
                                    <li key={hub.id}>{hub.name}</li> // Display hub names, or whatever data you have
                                ))}
                            </ul>
                        ) : (
                            <p>No hubs found at this location.</p>
                        )}
                    </div>
                )}

                {
                <Footer/>
                /* ... (rest of your content, buttons, footer) */}
            </div>
        </div>
    );
};

export default LocationSelection;