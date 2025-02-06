import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "./LoginForm.css"; // Import the updated CSS file

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const token = await response.text(); // API returns token as a plain string

        if (token) {
          //  sessionStorage.setItem("jwtToken", token);
  
        alert("Login successful!");
      } 
    }else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="login-container">
      <h2>Login</h2>
      <Form onSubmit={handleLogin} className="login-form">
        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="form-group">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" className="login-btn">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
