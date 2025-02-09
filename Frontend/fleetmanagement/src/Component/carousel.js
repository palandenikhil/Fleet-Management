// import React from 'react';
// import { Carousel, Container } from 'react-bootstrap';
// import './carousel.css';

// const SimpleCarousel = () => {
//     return (
//         <Container fluid>
//             <Carousel controls={false} indicators={false}>
//                 <Carousel.Item>
//                     <div className="carousel-item" style={{ backgroundImage: `url("https://images.pexels.com/photos/29648178/pexels-photo-29648178/free-photo-of-vintage-mercedes-300sl-car-on-rocky-terrain.jpeg")` }}>
//                     </div>
//                 </Carousel.Item>
//                 {/* <Carousel.Item>
//                     <div className="carousel-item" style={{ backgroundImage: `url("https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg")` }}>
//                     </div>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <div className="carousel-item" style={{ backgroundImage: `url("https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg")` }}>
//                     </div>
//                 </Carousel.Item> */}
//             </Carousel>
//         </Container>
//     );
// };

// export default SimpleCarousel;

import React, { useState } from 'react';
import { Container, Box, TextField, FormControlLabel, Checkbox, Button, Radio, RadioGroup, FormLabel, FormControl, Typography, Link } from '@mui/material';
import './carousel.css';

const Carasoule = () => {
    const [formData, setFormData] = useState({
        rentalDate: '',
        rentalTime: '',
        rentalTimePeriod: 'AM',
        returnDate: '',
        returnTime: '',
        returnTimePeriod: 'AM',
        pickupLocation: '',
        pickupCity: '',
        pickupState: '',
        returnToDifferentLocation: false,
        returnLocation: '',
        returnCity: '',
        returnState: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <Container fluid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width:'100%' , minHeight: '100vh', backgroundImage: `url("https://images.pexels.com/photos/29648178/pexels-photo-29648178/free-photo-of-vintage-mercedes-300sl-car-on-rocky-terrain.jpeg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Box className="hero-form" sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: 4,
                borderRadius: 2,
                boxShadow: 3,
                width: '100%',
                maxWidth: 500,
            }}>
                <Typography variant="h5" gutterBottom>
                    Book Your Car Rental
                </Typography>
                <TextField label="Rental Date" type="date" fullWidth margin="normal" name="rentalDate" value={formData.rentalDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />
                <FormControl component="fieldset">
                    <FormLabel>Rental Time</FormLabel>
                    <TextField type="time" fullWidth margin="normal" name="rentalTime" value={formData.rentalTime} onChange={handleChange} />
                    <RadioGroup row name="rentalTimePeriod" value={formData.rentalTimePeriod} onChange={handleChange}>
                        <FormControlLabel value="AM" control={<Radio />} label="AM" />
                        <FormControlLabel value="PM" control={<Radio />} label="PM" />
                    </RadioGroup>
                </FormControl>
                <TextField label="Return Date" type="date" fullWidth margin="normal" name="returnDate" value={formData.returnDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />
                <FormControl component="fieldset">
                    <FormLabel>Return Time</FormLabel>
                    <TextField type="time" fullWidth margin="normal" name="returnTime" value={formData.returnTime} onChange={handleChange} />
                    <RadioGroup row name="returnTimePeriod" value={formData.returnTimePeriod} onChange={handleChange}>
                        <FormControlLabel value="AM" control={<Radio />} label="AM" />
                        <FormControlLabel value="PM" control={<Radio />} label="PM" />
                    </RadioGroup>
                </FormControl>
                <Typography variant="subtitle1">Enter Airport Code</Typography>
                <TextField label="Pickup Location" fullWidth margin="normal" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} />
                <Link href="#">Find Airport</Link>
                <TextField label="Pickup City" fullWidth margin="normal" name="pickupCity" value={formData.pickupCity} onChange={handleChange} />
                <TextField label="Pickup State" fullWidth margin="normal" name="pickupState" value={formData.pickupState} onChange={handleChange} />
                <FormControlLabel control={<Checkbox name="returnToDifferentLocation" checked={formData.returnToDifferentLocation} onChange={handleChange} />} label="I may return the car to a different location" />
                <TextField label="Return Location" fullWidth margin="normal" name="returnLocation" value={formData.returnLocation} onChange={handleChange} />
                <TextField label="Return City" fullWidth margin="normal" name="returnCity" value={formData.returnCity} onChange={handleChange} />
                <TextField label="Return State" fullWidth margin="normal" name="returnState" value={formData.returnState} onChange={handleChange} />
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Continue</Button>
            </Box>
        </Container>
    );
};

export default Carasoule;

