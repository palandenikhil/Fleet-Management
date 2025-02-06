import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "./Signup.css"; // Import custom CSS

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== rePassword) {
      setError("Passwords do not match!");
      return;
    }

    const userData = {
      userName: username,
      lastName: lastName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        setMessage("Signup successful! You can now log in.");
        setEmail("");
        setUsername("");
        setLastName("");
        setPassword("");
        setRePassword("");
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError("Error connecting to the server.");
    }
  };

  return (
    <Container className="signup-container">
      <h2 className="text-center mb-4">Signup</h2>

      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="username" className="mt-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="lastName" className="mt-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className="mt-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="rePassword" className="mt-3">
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Re-enter password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-4">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
