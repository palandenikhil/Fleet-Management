import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Form, Button, Row, Col } from 'react-bootstrap';

const CustomerForm = () => {
    const navigate = useNavigate(); // Initialize navigation
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        homePhone: '',
        email: '',
        city: '',
        pincode: '',
        phoneNumber: '',
        mobileNumber: '',
        creditCardType: '',
        creditCardNumber: '',
        drivingLicenseNumber: '',
        idpNumber: '',
        issuedByDL: '',
        validThroughDL: '',
        passportNumber: '',
        passportValidThrough: '',
        passportIssuedBy: '',
        passportValidFrom: '',
        passportIssueDate: '',
        dateOfBirth: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Customer data submitted successfully');
                sessionStorage.setItem('formData', JSON.stringify(formData));
                localStorage.setItem('email', formData.email);
                navigate('/BookingDetail'); // Use navigate instead of window.location.href
                setFormData({
                    firstName: '',
                    lastName: '',
                    addressLine1: '',
                    addressLine2: '',
                    homePhone: '',
                    email: '',
                    city: '',
                    pincode: '',
                    phoneNumber: '',
                    mobileNumber: '',
                    creditCardType: '',
                    creditCardNumber: '',
                    drivingLicenseNumber: '',
                    idpNumber: '',
                    issuedByDL: '',
                    validThroughDL: '',
                    passportNumber: '',
                    passportValidThrough: '',
                    passportIssuedBy: '',
                    passportValidFrom: '',
                    passportIssueDate: '',
                    dateOfBirth: '',
                    password: ''
                });
            } else {
                console.error('Failed to submit customer data');
            }
        } catch (error) {
            console.error('Error submitting customer data:', error);
        }
    };

    return (
        <Row className="justify-content-center mt-0">
            <Col md={6} className="login-container">
                <Form onSubmit={handleSubmit} className="login-form">
                    <h2>Customer Information Form</h2>
                    <Form.Group controlId="firstName" className="form-group">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="lastName" className="form-group">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="addressLine1" className="form-group">
                        <Form.Label>Address Line 1:</Form.Label>
                        <Form.Control type="text" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="addressLine2" className="form-group">
                        <Form.Label>Address Line 2:</Form.Label>
                        <Form.Control type="text" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="homePhone" className="form-group">
                        <Form.Label>Home Phone:</Form.Label>
                        <Form.Control type="text" name="homePhone" value={formData.homePhone} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="email" className="form-group">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    {/* <Form.Group controlId="state" className="form-group">
                        <Form.Label>State:</Form.Label>
                        <Form.Control type="text" name="state" value={formData.state} onChange={handleChange} required />
                    </Form.Group> */}
                    <Form.Group controlId="city" className="form-group">
                        <Form.Label>City:</Form.Label>
                        <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="pincode" className="form-group">
                        <Form.Label>Pincode:</Form.Label>
                        <Form.Control type="text" name="pincode" value={formData.pincode} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="phoneNumber" className="form-group">
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="mobileNumber" className="form-group">
                        <Form.Label>Mobile Number:</Form.Label>
                        <Form.Control type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="creditCardInfo" className="form-group credit-card-info">
    <div className="credit-card-flex">
        <Form.Group controlId="creditCardType" className="form-group half-width">
            <Form.Label>Credit Card Type:</Form.Label>
            <Form.Control as="select" name="creditCardType" value={formData.creditCardType} onChange={handleChange} required>
                <option value="">Select Credit Card Type</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="American Express">American Express</option>
                <option value="Discover">Discover</option>
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="creditCardNumber" className="form-group half-width">
            <Form.Label>Credit Card Number:</Form.Label>
            <Form.Control type="text" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleChange} required />
        </Form.Group>
    </div>
</Form.Group>

                    <Form.Group controlId="drivingLicenseNumber" className="form-group">
                        <Form.Label>Driving License Number:</Form.Label>
                        <Form.Control type="text" name="drivingLicenseNumber" value={formData.drivingLicenseNumber} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="idpNumber" className="form-group">
                        <Form.Label>IDP Number:</Form.Label>
                        <Form.Control type="text" name="idpNumber" value={formData.idpNumber} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="validThroughDL" className="form-group">
                        <Form.Label>Valid Through (DL):</Form.Label>
                        <Form.Control type="date" name="validThroughDL" value={formData.validThroughDL} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="passportNumber" className="form-group">
                        <Form.Label>Passport Number:</Form.Label>
                        <Form.Control type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="passportValidThrough" className="form-group">
                        <Form.Label>Passport Valid Through:</Form.Label>
                        <Form.Control type="date" name="passportValidThrough" value={formData.passportValidThrough} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="passportIssuedBy" className="form-group">
                        <Form.Label>Passport Issued By:</Form.Label>
                        <Form.Control type="text" name="passportIssuedBy" value={formData.passportIssuedBy} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="passportIssueDate" className="form-group">
                        <Form.Label>Passport Issue Date:</Form.Label>
                        <Form.Control type="date" name="passportIssueDate" value={formData.passportIssueDate} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group controlId="dateOfBirth" className="form-group">
                        <Form.Label>Date of Birth:</Form.Label>
                        <Form.Control type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                    </Form.Group>
                    {/* <Form.Group controlId="password" className="form-group">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </Form.Group> */}
                    <Button variant="primary" type="submit" className="login-btn">Submit</Button>
                </Form>
            </Col>
        </Row>
    );
};

export default CustomerForm;
