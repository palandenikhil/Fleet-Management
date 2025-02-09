import React from 'react';
import Navbar from './navbar';
import Carasoule from './carousel';
import Footer from './footer';
// import '@fortawesome/fontawesome-free/css/all.css';


function Landing() {
    return (
      <>
        <div >
          <Navbar />
          <Carasoule />
          <Footer />
        </div>
      </>
    );
  }
  

export default Landing;
