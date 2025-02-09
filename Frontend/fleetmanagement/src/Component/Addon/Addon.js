import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Addon.css";

const Addon = () => {
  const [addons, setAddons] = useState([]);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [childSeatCount, setChildSeatCount] = useState(1);
  const [showChildSeatDropdown, setShowChildSeatDropdown] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/api/addons")
      .then((response) => response.json())
      .then((data) => setAddons(data))
      .catch((error) => console.error("Error fetching addons:", error));
  }, []);

  useEffect(() => {
    const isChildSeatSelected = selectedAddons.some(
      (addon) => addon.addonName === "Child Seats"
    );
    setShowChildSeatDropdown(isChildSeatSelected);
  }, [selectedAddons]);

  const handleCheckboxChange = (addon) => {
    setSelectedAddons((prevSelected) => {
      if (prevSelected.some((item) => item.addonId === addon.addonId)) {
        return prevSelected.filter((item) => item.addonId !== addon.addonId);
      } else {
        return [...prevSelected, addon];
      }
    });
  };

  const handleChildSeatChange = (e) => {
    setChildSeatCount(Math.max(1, parseInt(e.target.value) || 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalSelection = selectedAddons.map((addon) =>
      addon.addonName === "Child Seats"
        ? { ...addon, quantity: childSeatCount }
        : addon
    );
    console.log("Selected Add-ons:", finalSelection);
  };

  return (
    <Container className="addon-form-container">
      <h3 className="addon-title">Rental Add-ons</h3>
      <Form onSubmit={handleSubmit}>
        {addons?.map((addon) => (
          <Row key={addon.addonId} className="addon-item align-items-center">
            <Col xs={6} className="addon-label">
              <Form.Check
                type="checkbox"
                label={addon.addonName}
                onChange={() => handleCheckboxChange(addon)}
                checked={selectedAddons.some((item) => item.addonId === addon.addonId)}
              />
            </Col>
            <Col xs={6} className="text-end">
              <span>${addon.addonDailyRate}/day</span>
            </Col>
          </Row>
        ))}

        {showChildSeatDropdown && (
          <div className="child-seat-container visible">
            <label className="child-seat-label">Please enter No. of Seats</label>
            <Form.Select
              value={childSeatCount}
              onChange={handleChildSeatChange}
              className="child-seat-dropdown"
            >
              {[...Array(5).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </Form.Select>
          </div>
        )}

        <div className="button-container">
          <Button type="submit" variant="primary" className="continue-button">
            Continue Booking
          </Button>
          <Button variant="secondary" className="cancel-button">
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Addon;
