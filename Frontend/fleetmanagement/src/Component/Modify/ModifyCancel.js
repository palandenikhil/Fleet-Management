import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col, Modal, Alert } from "react-bootstrap";

import './ModifyCancel.css';

const BookingDetails = ({ customerEmail }) => {
  const [customer, setCustomer] = useState(null);
  const [booking, setBooking] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [confirmationNumber, setConfirmationNumber] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch customer and booking data
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const customerResponse = await fetch(`http://localhost:8080/customer?email=${customerEmail}`);
        const customerData = await customerResponse.json();
        setCustomer(customerData);
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setError("Failed to fetch customer data");
      }
    };

    fetchCustomerData();
  }, [customerEmail]);

  // Fetch booking details when confirmation number is entered
  useEffect(() => {
    const fetchBookingData = async () => {
      if (confirmationNumber) {
        try {
          const bookingResponse = await fetch(`http://localhost:8080/api/booking/email/${customerEmail}`);
          const bookingData = await bookingResponse.json();
          const foundBooking = bookingData.find(b => b.bookingConfirmationNo === confirmationNumber);

          if (foundBooking) {
            setBooking(foundBooking);
          } else {
            setError("No booking found with the provided confirmation number.");
          }
        } catch (error) {
          console.error("Error fetching booking data:", error);
          setError("Failed to fetch booking data");
        }
      }
    };

    fetchBookingData();
  }, [customerEmail, confirmationNumber]);

  // Handle booking cancellation
  const handleCancelBooking = async () => {
    try {
      await fetch(`http://localhost:8080/api/deletebooking/${booking.bookingId}`, { method: "DELETE" });
      setSuccessMessage("Booking has been canceled successfully!");
      setShowCancelModal(false);
      setBooking(null); // Clear booking details after cancel
    } catch (error) {
      console.error("Error canceling booking:", error);
      setError("Failed to cancel the booking");
    }
  };

  // Handle modify booking action
  const handleModifyBooking = () => {
    // Logic for modifying booking can be handled here
    console.log("Modify booking process started...");
    // Redirect to a booking form or restart the process with previous data.
  };

  return (
    <Container className="booking-container">
      <h2 className="text-center mb-4">Modify or Cancel Booking</h2>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Booking Confirmation Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter booking confirmation number"
              value={confirmationNumber}
              onChange={(e) => setConfirmationNumber(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      {/* Display any error or success messages */}
      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      {/* Display booking details if found */}
      {booking && (
        <>
          <h4>Booking Details</h4>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={customer?.firstName || ""} readOnly />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={customer?.lastName || ""} readOnly />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Pick-up Date</Form.Label>
                <Form.Control type="date" value={booking?.pickupDate} readOnly />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Return Date</Form.Label>
                <Form.Control type="date" value={booking?.returnDate} readOnly />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button variant="danger" onClick={() => setShowCancelModal(true)} className="me-3">
              Cancel Booking
            </Button>
            <Button variant="primary" onClick={handleModifyBooking}>
              Modify Booking
            </Button>
          </div>
        </>
      )}

      {/* Cancel Modal */}
      <Modal show={showCancelModal} onHide={() => setShowCancelModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cancel Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you really want to cancel your booking?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCancelModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={handleCancelBooking}>
            Yes, Cancel Booking
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default BookingDetails;
