// import React, { useState } from "react";
// import { Form, Button, Container, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./LoginForm.css"; // Import the updated CSS file


// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   // const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const userData = { email, password };

//     try {
//       const response = await fetch("http://localhost:8080/auth/signIn", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.ok) {
//         const token = await response.text(); // API returns token as a plain string
// console.log(token);
//         if (token) {
        
//           sessionStorage.setItem("jwtToken", token);
  
//         alert("Login successful!");
//       } 
//     }else {
//         setError("Invalid email or password.");
//       }
//     } catch (error) {
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     <Container className="login-container">
//       <h2>Login</h2>
//       <Form onSubmit={handleLogin} className="login-form">
//         {error && <Alert variant="danger">{error}</Alert>}

//         <Form.Group className="form-group">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="form-group">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Button type="submit" className="login-btn">
//           Login
//         </Button>

//         <Form.Text className="text-muted">
//           Don't have an account? <Link to="/signup">Register here</Link>
//         </Form.Text>
//       </Form>
//     </Container>
//   );
// }

// export default LoginForm;

import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginForm.css"; // Ensure this file is properly linked

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await fetch("http://localhost:8080/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const token = await response.text();
        console.log(token);
        if (token) {
          sessionStorage.setItem("jwtToken", token);
          alert("Login successful!");
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6} xl={5}>
          <div className="login-box">
            <h2 className="text-center">Login</h2>
            <Form onSubmit={handleLogin} className="login-form">
              {error && <Alert variant="danger">{error}</Alert>}

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="login-btn w-100">
                Login
              </Button>

              <p className="text-center mt-3">
                Don't have an account? <Link to="/signup">Register here</Link>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;

