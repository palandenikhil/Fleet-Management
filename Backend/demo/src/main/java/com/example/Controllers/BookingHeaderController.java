package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Models.BookingHeader;
import com.example.Models.CarMaster;
import com.example.Repositories.CarMasterRepository;
import com.example.Services.BookingHeaderService;
import com.example.dto.BookingHeaderDTO;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookingHeaderController {

    @Autowired
    private BookingHeaderService booking_header_service;
    
    @Autowired
    private CarMasterRepository carMasterRepository; 
   
    @PostMapping("/addbooking")
    public ResponseEntity<BookingHeader> save(@RequestBody BookingHeader booking) {
     
        if (booking.getCar() == null || booking.getCar().getCarId() == null) {
            throw new RuntimeException("Car is required for the booking.");
        }

       
        Long carId = booking.getCar().getCarId();
        CarMaster car = carMasterRepository.findById(carId)
                .orElseThrow(() -> new RuntimeException("Car not found with id: " + carId));

        // Set the CarMaster object on the booking (this may be redundant if already populated)
        booking.setCar(car);

        // Save the booking header
        BookingHeader savedBooking = booking_header_service.save(booking);

        // Return the saved booking header
        return ResponseEntity.ok(savedBooking);
    }

 

    @GetMapping("/booking/email/{emailId}")
    public ResponseEntity<List<BookingHeaderDTO>> getBookingByEmailId(@PathVariable String emailId) {
        List<BookingHeaderDTO> bookings = booking_header_service.getBookingDetailsByEmailId(emailId);
        return ResponseEntity.ok(bookings);
    }

    
    @DeleteMapping("/deletebooking/{bookingId}")
    public ResponseEntity<String> deleteBooking(@PathVariable Long bookingId) {
        booking_header_service.deleteBooking(bookingId);
        return ResponseEntity.ok("Booking deleted successfully.");
    }
}
