import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import VehicleSelection from './VehicleSelection';

const StaffReservationForm = () => {
  const [formData, setFormData] = useState({
    rentalDate: '',
    rentalTime: '',
    rentalTimePeriod: 'AM',
    returnDate: '',
    returnTime: '',
    returnTimePeriod: 'AM',
    hubLocation: 'Mumbai',
    airportCode: 'BOM' 
  });

  const navigate = useNavigate();

  useEffect(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setFormData((prevData) => ({
      ...prevData,
      rentalDate: currentDate,
      rentalTime: currentTime,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (formData.rentalDate && formData.rentalTime && formData.returnDate && formData.returnTime) {
      // Navigate to hub location page
      navigate('/VehicleSelection', { state: { formData } });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Container style={{
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      padding: '2rem',
      borderRadius: '0.5rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontSize: '1.2rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative',
      top: '50px'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}>Reservation by Staff</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: '1.2rem', color: '#000' }}>Rental Date</Form.Label>
              <Form.Control
                type="date"
                name="rentalDate"
                value={formData.rentalDate}
                onChange={handleChange}
                readOnly
                style={{ fontSize: '1.2rem', padding: '0.5rem' }}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: '1.2rem', color: '#000' }}>Rental Time</Form.Label>
              <Form.Control
                type="time"
                name="rentalTime"
                value={formData.rentalTime}
                onChange={handleChange}
                readOnly
                style={{ fontSize: '1.2rem', padding: '0.5rem' }}
              />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <Form.Check
                  type="radio"
                  label="AM"
                  name="rentalTimePeriod"
                  value="AM"
                  checked={formData.rentalTimePeriod === 'AM'}
                  onChange={handleChange}
                  disabled
                  style={{ fontSize: '1.2rem', paddingLeft: '0.5rem' }}
                />
                <Form.Check
                  type="radio"
                  label="PM"
                  name="rentalTimePeriod"
                  value="PM"
                  checked={formData.rentalTimePeriod === 'PM'}
                  onChange={handleChange}
                  disabled
                  style={{ fontSize: '1.2rem', paddingLeft: '0.5rem' }}
                />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: '1.2rem', color: '#000' }}>Return Date</Form.Label>
              <Form.Control
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                style={{ fontSize: '1.2rem', padding: '0.5rem' }}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: '1.2rem', color: '#000' }}>Return Time</Form.Label>
              <Form.Control
                type="time"
                name="returnTime"
                value={formData.returnTime}
                onChange={handleChange}
                style={{ fontSize: '1.2rem', padding: '1rem' }}
              />
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                <Form.Check
                  type="radio"
                  label="AM"
                  name="returnTimePeriod"
                  value="AM"
                  checked={formData.returnTimePeriod === 'AM'}
                  onChange={handleChange}
                  style={{ fontSize: '1.2rem', paddingLeft: '1rem' }}
                />
                <Form.Check
                  type="radio"
                  label="PM"
                  name="returnTimePeriod"
                  value="PM"
                  checked={formData.returnTimePeriod === 'PM'}
                  onChange={handleChange}
                  style={{ fontSize: '1.2rem', paddingLeft: '1rem' }}
                />
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label style={{ fontSize: '1.2rem', color: '#000' }}>Hub Location</Form.Label>
          <Form.Control
            type="text"
            name="hubLocation"
            value={formData.hubLocation}
            readOnly
            style={{ fontSize: '1.2rem', padding: '0.5rem' }}
          />
        </Form.Group>

        {/* Hidden input field for airport code */}
        <Form.Control
          type="hidden"
          name="airportCode"
          value={formData.airportCode}
        />

        <Button variant="primary" type="submit" style={{
          marginTop: '2rem',
          width: '100%',
          backgroundColor: '#007bff',
          border: 'none',
          padding: '0.75rem',
          fontSize: '1.2rem',
          transition: 'background-color 0.3s ease'
        }}>
          Continue Booking
        </Button>
      </Form>
    </Container>
  );
};

export default StaffReservationForm;