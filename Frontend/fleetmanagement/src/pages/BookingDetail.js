import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const BookingDetails = () => {
    const [customer, setCustomer] = useState(null);
    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [estimatedAmt, setEstimatedAmt] = useState(0);
    const customerEmail = localStorage.getItem('email');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);  // Start loading

            try {
                const customerResponse = await fetch(`http://localhost:8080/api/customers/email/${customerEmail}`);
                const customerData = await customerResponse.json();
                console.log("Customer Data:", customerData);
                setCustomer(customerData);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }

            try {
                const bookingResponse = await fetch(`http://localhost:8080/api/booking/email/${customerEmail}`);
                const bookingData = await bookingResponse.json();
                console.log("Booking Data:", bookingData); 
                console.log("Pickup Hub Address:", bookingData[0]?.enddate || "Not Found");
                console.log("Pickup Hub Address:", bookingData[0]?.pickup_hubAddress || "Not Found");
                setBooking(bookingData);
                calculateEstimatedAmount(bookingData);
            } catch (error) {
                console.error("Error fetching booking data:", error);
            }

            setLoading(false);  
        };

        fetchData();
    }, [customerEmail]);

    const calculateEstimatedAmount = (bookingData) => {
        if (!bookingData || !bookingData[0]?.startdate || !bookingData[0]?.enddate) return;

        const start = new Date(bookingData[0]?.startdate);
        const end = new Date(bookingData[0]?.enddate);
        const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

        let totalCost = 0;

        if (totalDays >= 30) {
            let months = Math.floor(totalDays / 30);
            let remainingDays = totalDays % 30;
            totalCost = months * bookingData[0]?.monthlyRate + remainingDays * bookingData[0]?.dailyRate;
        } else if (totalDays >= 7) {
            let weeks = Math.floor(totalDays / 7);
            let remainingDays = totalDays % 7;
            totalCost = weeks * bookingData[0]?.weeklyRate + remainingDays * bookingData[0]?.dailyRate;
        } else {
            totalCost = totalDays * bookingData[0]?.dailyRate;
        }
        setEstimatedAmt(totalCost);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleCancel = async () => {
        if (!booking || booking.length === 0 || !booking[0]?.bookingId) {
            alert("No valid booking found!");
            return;
        }
    
        const bookingId = booking[0].bookingId;
        const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
        if (!confirmCancel) return;
    
        try {
            const response = await fetch(`http://localhost:8080/api/deletebooking/${bookingId}`, {
                method: "DELETE",
            });
    
            if (response.ok) {
                alert("Booking canceled successfully!");
                setBooking(null);
                navigate("/");
            } else {
                alert("Failed to cancel booking. Please try again.");
            }
        } catch (error) {
            console.error("Error canceling booking:", error);
            alert("An error occurred while canceling the booking.");
        }
    };

    return (
        <Container className="booking-container">
            <h2 className="text-center mb-4">Booking Details</h2>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Pick-up Date</Form.Label>
                        <Form.Control type="text" defaultValue={booking[0]?.startdate} readOnly disabled/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Pick-up Location</Form.Label>
                        <Form.Control type="text" defaultValue={booking[0]?.pickup_hubAddress} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Return Date</Form.Label>
                        <Form.Control type="text" defaultValue={booking[0]?.enddate} readOnly disabled/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Return Location</Form.Label>
                        <Form.Control type="text" defaultValue={booking[0]?.return_hubAddress} readOnly disabled/>
                    </Form.Group>
                </Col>
            </Row>

            <h4>Customer Details</h4>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" value={customer?.firstName || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={customer?.lastName || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={12}>
                    <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" value={`${customer?.addressLine1 || ""}, ${customer?.addressLine2 || ""}`} readOnly disabled/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={customer?.email || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={customer?.city || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>ZIP</Form.Label>
                        <Form.Control type="text" value={customer?.pincode || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Driving License</Form.Label>
                        <Form.Control type="text" value={customer?.drivingLicenseNumber || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>IDP Number</Form.Label>
                        <Form.Control type="text" value={customer?.idpNumber || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Valid Through</Form.Label>
                        <Form.Control type="text" value={customer?.validThroughDL || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Passport Number</Form.Label>
                        <Form.Control type="text" value={customer?.passportNumber || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Issued By</Form.Label>
                        <Form.Control type="text" value={customer?.passportIssuedBy || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Valid From</Form.Label>
                        <Form.Control type="text" value={customer?.passportValidFrom || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group>
                        <Form.Label>Valid Through</Form.Label>
                        <Form.Control type="text" value={customer?.passportValidThrough || ""} readOnly disabled/>
                    </Form.Group>
                </Col>
            </Row>

            <h4>Estimated Amount</h4>
            <Row className="mb-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Total Amount</Form.Label>
                        <Form.Control type="text" value={`₹${estimatedAmt}`} readOnly disabled />
                    </Form.Group>
                </Col>
            </Row>

            <h4>Booking Summary</h4>

            <div className="text-center mt-4">
                <Button variant="primary" className="me-3">Confirm</Button>
                <Button variant="secondary" onClick={() => navigate('/signup')}>Modify</Button>
                <Button variant="danger" onClick={handleCancel}>Cancel</Button>
            </div>
        </Container>
    );
};

export default BookingDetails;