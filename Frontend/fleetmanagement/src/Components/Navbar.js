// src/components/Navbar.js
import React from 'react';
import '../Components/Navbar.css';

const Navbar = () => {
    return (
        <header className="header-navbar">
            <nav className="navbar">
                <div className="navbar-brand">
                    <h2 style={{color : "white",fontWeight:'bold'}}>Hire & Go</h2>
                </div>

                <div className="navbar-left">
                    <a href="/">Home</a>
                    <a href="/ModifyCancel">Modify/Cancel Booking</a>
                    <a href="/Signup">Membership Registration</a>
                    <a href="/AboutUs">About us</a>
                    <a href="/CustomerCare">Customer Care</a>
                </div>

                <div className="navbar-right">
                    <a href="/LoginForm">Login</a>
                    <a href="/StaffLogin">Staff Login</a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
