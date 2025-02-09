import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ReservationForm.css';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    rentalDate: '',
    rentalTime: '',
    rentalTimePeriod: 'AM',
    returnDate: '',
    returnTime: '',
    returnTimePeriod: 'AM',
    pickupLocation: '',
    pickupCity: '',
    pickupState: '',
    returnToDifferentLocation: false,
    returnLocation: '',
    returnCity: '',
    returnState: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "pickupLocation"
        ? { pickupCity: "", pickupState: "" } // Clear city/state if airport code is entered
        : name === "pickupCity" || name === "pickupState"
        ? { pickupLocation: "" } // Clear airport code if city/state is entered
        : {}),
    }));
  };

  const handleSearch = async () => {
    try {
      let response;
      if (formData.pickupLocation) {
        // Fetch airport by code
        const airportCode = formData.pickupLocation.toUpperCase(); // Ensure the code is in uppercase
        response = await fetch(`http://localhost:8081/api/airports/code/${airportCode}`);
      } else if (formData.pickupCity && formData.pickupState) {
        // Fetch state and city
        const stateResponse = await fetch(`/api/states`);
        const states = await stateResponse.json();
        const state = states.find(state => state.stateName === formData.pickupState);
        if (state) {
          response = await fetch(`/api/cities/state/${state.stateId}`);
        }
      }
  
      if (response && response.ok) {
        const data = await response.json();
        console.log('Fetched data:', data);
        // Navigate to hub selection page with the fetched data
        window.location.href = '/HubSelectionForm';
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container className="reservation-form">
      <Form>
        <h2 className='main-heading'>Make Your Reservation Here</h2>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Rental Date</Form.Label>
              <Form.Control type="date" name="rentalDate" value={formData.rentalDate} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Rental Time</Form.Label>
              <Form.Control type="time" name="rentalTime" value={formData.rentalTime} onChange={handleChange} required />
              <div className="radio-group">
                <Form.Check type="radio" label="AM" name="rentalTimePeriod" value="AM" checked={formData.rentalTimePeriod === 'AM'} onChange={handleChange} />
                <Form.Check type="radio" label="PM" name="rentalTimePeriod" value="PM" checked={formData.rentalTimePeriod === 'PM'} onChange={handleChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Return Date</Form.Label>
              <Form.Control type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Return Time</Form.Label>
              <Form.Control type="time" name="returnTime" value={formData.returnTime} onChange={handleChange} required />
              <div className="radio-group">
                <Form.Check type="radio" label="AM" name="returnTimePeriod" value="AM" checked={formData.returnTimePeriod === 'AM'} onChange={handleChange} />
                <Form.Check type="radio" label="PM" name="returnTimePeriod" value="PM" checked={formData.returnTimePeriod === 'PM'} onChange={handleChange} />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <h5>Pick-up Location</h5>
        <Form.Group className="mb-3">
          <Form.Label>Enter Airport Code</Form.Label>
          <Form.Control type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} disabled={formData.pickupCity || formData.pickupState} // Disable if city/state is entered
  />
          <a href="#" className="find-airport-link">Find Airport</a>
        </Form.Group>
        <h5>OR</h5>
        <Form.Group className="mb-3">
          <Form.Label>Enter City and State</Form.Label>
          <Row>
            <Col md={6}>
              <Form.Control type="text" name="pickupCity" placeholder="City" value={formData.pickupCity} onChange={handleChange}  disabled={formData.pickupLocation} />
            </Col>
            <Col md={6}>
              <Form.Control type="text" name="pickupState" placeholder="State" value={formData.pickupState} onChange={handleChange}  disabled={formData.pickupLocation} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button className="search-button" type="button" onClick={handleSearch}>Search</Button>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check type="checkbox" name="returnToDifferentLocation" checked={formData.returnToDifferentLocation} onChange={handleChange} label="Return to a different location?" />
        </Form.Group>

        <h5>Return Location</h5>
        <Form.Group className="mb-3">
          <Form.Label>Enter Airport Code</Form.Label>
          <Form.Control type="text" name="returnLocation" value={formData.returnLocation} onChange={handleChange} />
          <a href="#" className="find-airport-link">Find Airport</a>
        </Form.Group>
        <h5>OR</h5>
        <Form.Group className="mb-3">
          <Form.Label>Enter City and State</Form.Label>
          <Row>
            <Col md={6}>
              <Form.Control type="text" name="returnCity" placeholder="City" value={formData.returnCity} onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Control type="text" name="returnState" placeholder="State" value={formData.returnState} onChange={handleChange} />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Button className="search-button" type="button">Search</Button>
        </Form.Group>

        {/* <Button variant="primary" type="submit" className="continue-booking-btn">Continue Booking</Button> */}
      </Form>
    </Container>
  );
};

export default ReservationForm;