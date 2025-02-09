import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Home.css';
import ReservationForm from '../Components/ReservationForm';

const Home = () => {
    return (
        <Container fluid>
            <div>
            <div className="carousel-item" style={{ height:"900px", backgroundImage: `url("https://images.pexels.com/photos/29648178/pexels-photo-29648178/free-photo-of-vintage-mercedes-300sl-car-on-rocky-terrain.jpeg")` }}>
            <h1 >Hire&Go</h1>
            <div>
                <ReservationForm/>
            </div>
            </div>
            </div>
        </Container>
    );
};

export default Home;
