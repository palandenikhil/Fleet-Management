import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/footer';
// import BookingForm from '../BookingForm';
import Home from './Home';
import '@fortawesome/fontawesome-free/css/all.css';


function Landing() {
    return (
      <>
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Navbar/>
          <Home/>
          <Footer/>
        </div>
      </>
    );
  }
  

export default Landing;
