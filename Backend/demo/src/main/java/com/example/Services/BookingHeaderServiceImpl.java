package com.example.Services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.BookingHeader;
import com.example.Models.CarMaster;
import com.example.Models.CarTypeMaster;
import com.example.Models.CustomerMaster;
import com.example.Repositories.BookingHeaderRepository;
import com.example.Repositories.CarMasterRepository;
import com.example.Repositories.CarTypeMasterRepository;
import com.example.Repositories.CustomerRepository;
import com.example.dto.BookingDetailDTO;
import com.example.dto.BookingHeaderDTO;

@Service
public class BookingHeaderServiceImpl implements BookingHeaderService{
	
	@Autowired
	private BookingHeaderRepository booking_header_repository;
	
	@Autowired
    private CarMasterRepository carMasterRepository;

	@Autowired
	private CustomerRepository customerRepository;

	@Autowired
	private CarTypeMasterRepository carTypeRepository;
	@Override
	public List<BookingHeader> getBookingByEmailId(String emailId) {
		
	return booking_header_repository.getBookingByEmailId(emailId);
		
	}

	@Override
	public void deleteBooking(Long bookingId) {
		
		booking_header_repository.deleteById(bookingId);
	}

	@Override
	public BookingHeader save(BookingHeader booking) {
	    // Check if the car field is present and carId is provided
	    if (booking.getCar() == null || booking.getCar().getCarId() == null) {
	        throw new RuntimeException("Car is required for the booking.");
	    }

	    Long carId = booking.getCar().getCarId();  // Get the carId from the booking request

	    // Retrieve the CarMaster object from the CarMasterRepository using the carId
	    CarMaster car = carMasterRepository.findById(carId)
	            .orElseThrow(() -> new RuntimeException("Car not found with id: " + carId));

	    // Set the retrieved CarMaster object in the booking
	    booking.setCar(car);

	    // Check if the customer field is present and customerId is provided
	    if (booking.getCustomer() == null || booking.getCustomer().getCustomerId() == null) {
	        throw new RuntimeException("Customer is required for the booking.");
	    }

	    Long customerId = booking.getCustomer().getCustomerId();  // Get the customerId from the booking request

	   
	    CustomerMaster customer = customerRepository.getCustomerById(customerId)
	    		.orElseThrow(() -> new RuntimeException("Customer not found with id: " + customerId));
	           

	    // Set the retrieved CustomerMaster object in the booking
	    booking.setCustomer(customer);

	    // Check if the carType field is present and carTypeId is provided
	    if (booking.getCartype() == null || booking.getCartype().getCartypeId() == null) {
	        throw new RuntimeException("CarType is required for the booking.");
	    }

	    Long carTypeId = booking.getCartype().getCartypeId();  // Get the cartypeId from the booking request

	    // Retrieve the CarTypeMaster object from the CarTypeMasterRepository using the carTypeId
	    CarTypeMaster carType = carTypeRepository.findById(carTypeId)
	            .orElseThrow(() -> new RuntimeException("CarType not found with id: " + carTypeId));

	    // Set the retrieved CarTypeMaster object in the booking
	    booking.setCartype(carType);

	    // Save the booking object in the repository
	    return booking_header_repository.save(booking);
	}


	
	public List<BookingHeaderDTO> getBookingDetailsByEmailId(String emailId) {
        List<BookingHeader> bookings = getBookingByEmailId(emailId);
        
        return bookings.stream()
            .map(booking -> new BookingHeaderDTO(
                    booking.getBookingId(),
                    booking.getBookingdate(),
                    booking.getFirstname(),
                    booking.getLastname(),
                    booking.getEmailId(),
                    booking.getDailyrate(),
                    booking.getWeeklyrate(),
                    booking.getMonthlyrate(),
                    booking.getPickup_hubId(),
                    booking.getReturn_hubId(),
                    booking.getBookingDetails().stream()
                        .map(detail -> new BookingDetailDTO(
                            detail.getBookingDetailId(),
                            detail.getAddonId(),
                            detail.getAddonRate()))
                        .collect(Collectors.toList())
                ))
            .collect(Collectors.toList());
    }
	

}
