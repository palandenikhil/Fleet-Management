// src/components/Home.js
import React from 'react';
import MyCarousel from './carousel';
import './home.css';
const Home = () => {
    return (
        <div>
            <div className="home-content" >
                <h1 className='main-logo'>Hire&Go</h1>
            </div>
            <MyCarousel />
        </div>
    );
}

export default Home;
