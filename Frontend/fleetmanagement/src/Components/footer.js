import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

function Footer() {
  const footerStyle = {
    background: `url('') no-repeat center center fixed`,
    backgroundSize: 'cover',
    padding: '50px 20px',
    margin: '0 20px',
  };

  const flexContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: '20px',
  };

  const socialLinks = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  return (
    <footer style={footerStyle} className="bg-dark text-light py-3 mt-auto">
      <Container>
        <div style={flexContainer}>
          {/* Company Info */}
          <div>
            <h5>Hire&Go</h5>
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>
          
          {/* Social Links */}
          <div style={socialLinks}>
            <a href="mailto:example@gmail.com" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <i className="fa fa-envelope"></i> Gmail
            </a>
            <a href="https://www.instagram.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-instagram"></i> Instagram
            </a>
            <a href="https://www.facebook.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-facebook"></i> Facebook
            </a>
            <a href="https://twitter.com/" className="text-light" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <i className="fa-brands fa-twitter"></i> Twitter
            </a>
          </div>
          
          {/* Useful Links */}
          <div>
            <h5>Useful Links</h5>
            <ul className="list-unstyled" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><Link to="/aboutus" className="text-light" style={{ textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/AffiliatedHotels" className="text-light" style={{ textDecoration: 'none' }}>Affiliated Hotels</Link></li>
              <li><Link to="/WeatherRedirect" className="text-light" style={{ textDecoration: 'none' }}>Weather</Link></li>
              <li><Link to="/CustomerCare" className="text-light" style={{ textDecoration: 'none' }}>Contact Us</Link></li>
              <li><Link to="/sitemap" className="text-light" style={{ textDecoration: 'none' }}>SiteMap</Link></li>
              <li><Link to="/CareerPage" className="text-light" style={{ textDecoration: 'none' }}>Careers</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
