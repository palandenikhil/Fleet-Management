import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import hub-selection from "../components/hub-selection";

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
          ? http://localhost:8080/api/hubs/city/${searchValue}
          : http://localhost:8080/api/hubs/airportcode/${searchValue};

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(HTTP error! Status: ${response.status});
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
              label={${hub.hubName} - ${hub.hubAddress} (${hub.contactNumber})}
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