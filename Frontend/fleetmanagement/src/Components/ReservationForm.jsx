import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    rentalDate: '',
    rentalTime: '',
    returnDate: '',
    returnTime: '',
    pickupLocation: '',
    pickupCity: '',
    pickupState: '',
    returnToDifferentLocation: false,
    returnLocation: '',
    returnCity: '',
    returnState: '',
  });

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [returnCities, setReturnCities] = useState([]);

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/states');
        if (response.ok) {
          const data = await response.json();
          setStates(data);
        }
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };
    fetchStates();
  }, []);

  useEffect(() => {
    if (formData.pickupState) {
      const fetchCities = async () => {
        try {
          const state = states.find((state) => state.stateName === formData.pickupState);
          if (state) {
            const response = await fetch(`http://localhost:8080/api/cities/state/${state.stateId}`);
            if (response.ok) {
              const data = await response.json();
              setCities(data);
            }
          }
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      };
      fetchCities();
    }
  }, [formData.pickupState, states]);

  useEffect(() => {
    if (formData.returnState) {
      const fetchReturnCities = async () => {
        try {
          const state = states.find((state) => state.stateName === formData.returnState);
          if (state) {
            const response = await fetch(`http://localhost:8080/api/cities/state/${state.stateId}`);
            if (response.ok) {
              const data = await response.json();
              setReturnCities(data);
            }
          }
        } catch (error) {
          console.error('Error fetching return cities:', error);
        }
      };
      fetchReturnCities();
    }
  }, [formData.returnState, states]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'pickupLocation' ? { pickupState: '', pickupCity: '' } : {}),
      ...(name === 'pickupState' || name === 'pickupCity' ? { pickupLocation: '' } : {}),
      ...(name === 'returnLocation' ? { returnState: '', returnCity: '' } : {}),
      ...(name === 'returnState' || name === 'returnCity' ? { returnLocation: '' } : {}),
      ...(name === 'rentalDate' ? { returnDate: '', returnTime: '' } : {}), // Reset return date and time when rental date changes
    }));
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Searching with data:', formData);
    
    localStorage.setItem('reservationFormData', JSON.stringify(formData));

    // Pass pickup location (airport code) or city ID
    navigate('/HubSelection', {
      state: {
        airportCode: formData.pickupLocation,
        cityId: cities.find(city => city.cityName === formData.pickupCity)?.cityId
      }
    });
  };

  const minReturnDate = formData.rentalDate || today;

  return (
    <Container className="reservation-form">
      <Form>
        <h2 className="main-heading">Make Your Reservation Here</h2>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Rental Date</Form.Label>
              <Form.Control type="date" name="rentalDate" value={formData.rentalDate} onChange={handleChange} required min={today} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Rental Time</Form.Label>
              <Form.Control type="time" name="rentalTime" value={formData.rentalTime} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Return Date</Form.Label>
              <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required min={minReturnDate} />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Return Time</Form.Label>
              <Form.Control type="time" name="returnTime" value={formData.returnTime} onChange={handleChange} required />
            </Form.Group>
          </Col>
        </Row>

        <h5 className='p-head'>Pick-up Location</h5>
        <Form.Group className="mb-3">
          <Form.Label>Enter Airport Code</Form.Label>
          <Form.Control type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} disabled={formData.pickupState || formData.pickupCity} />
        </Form.Group>
        <h5>OR</h5>
        <Form.Group className="mb-3">
          <Row>
            <Col md={6}>
              <Form.Control as="select" name="pickupState" value={formData.pickupState} onChange={handleChange} disabled={formData.pickupLocation}>
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.stateId} value={state.stateName}>{state.stateName}</option>
                ))}
              </Form.Control>
            </Col>
            <Col md={6}>
              <Form.Control as="select" name="pickupCity" value={formData.pickupCity} onChange={handleChange} disabled={formData.pickupLocation || !formData.pickupState}>
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                ))}
              </Form.Control>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" name="returnToDifferentLocation" checked={formData.returnToDifferentLocation} onChange={handleChange} label="Return to a different location?" />
        </Form.Group>

        {formData.returnToDifferentLocation && (
          <>
            <h5>Return Location</h5>
            <Form.Group className="mb-3">
              <Form.Label>Enter Airport Code</Form.Label>
              <Form.Control type="text" name="returnLocation" value={formData.returnLocation} onChange={handleChange} disabled={formData.returnState || formData.returnCity} />
            </Form.Group>
            <h5>OR</h5>
            <Form.Group className="mb-3">
              <Row>
                <Col md={6}>
                  <Form.Control as="select" name="returnState" value={formData.returnState} onChange={handleChange} disabled={formData.returnLocation}>
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state.stateId} value={state.stateName}>{state.stateName}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={6}>
                  <Form.Control as="select" name="returnCity" value={formData.returnCity} onChange={handleChange} disabled={formData.returnLocation || !formData.returnState}>
                    <option value="">Select City</option>
                    {returnCities.map((city) => (
                      <option key={city.cityId} value={city.cityName}>{city.cityName}</option>
                    ))}
                  </Form.Control>
                </Col>
              </Row>
            </Form.Group>
          </>
        )}
        <Form.Group className="mb-3">
          <Button className="search-button" type="button" onClick={handleSearch}>Search</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default ReservationForm;