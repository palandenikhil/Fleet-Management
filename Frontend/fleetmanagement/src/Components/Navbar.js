// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="header-navbar">
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/">Home</a>
                    <a href="/modify-cancel">Modify/Cancel Booking</a>
                    <a href="/membership">Membership Registration</a>
                    <a href="/about">About us</a>
                    <a href="/customer-care">Customer Care</a>
                </div>
                <div className="navbar-right">
                    <a href="/login">Login</a>
                    <a href="/login">Staff Login</a>
                    {/* <a href="/booking">Booking</a>
                    <a href="/cancellation">Cancellation</a>
                    <a href="/handover">Handover</a>
                    <a href="/return">Return</a> */}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
