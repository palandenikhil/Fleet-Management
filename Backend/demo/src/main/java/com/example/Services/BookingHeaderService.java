package com.example.Services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.Models.BookingHeader;
import com.example.dto.BookingHeaderDTO;


public interface BookingHeaderService {
	public List<BookingHeader> getBookingByEmailId(String emailId);
	void deleteBooking (Long bookingId);
	public BookingHeader save(BookingHeader booking);
	 List<BookingHeaderDTO> getBookingDetailsByEmailId(String emailId);
}
