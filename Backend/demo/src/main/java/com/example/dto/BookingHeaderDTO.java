package com.example.dto;

import java.time.LocalDate;
import java.util.List;

public class BookingHeaderDTO {
    private Long bookingId;
    private LocalDate bookingdate;
    private String firstname;
    private String lastname;
    public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDate getBookingdate() {
		return bookingdate;
	}

	public void setBookingdate(LocalDate bookingdate) {
		this.bookingdate = bookingdate;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public Double getDailyrate() {
		return dailyrate;
	}

	public void setDailyrate(Double dailyrate) {
		this.dailyrate = dailyrate;
	}

	public Double getWeeklyrate() {
		return weeklyrate;
	}

	public void setWeeklyrate(Double weeklyrate) {
		this.weeklyrate = weeklyrate;
	}

	public Double getMonthlyrate() {
		return monthlyrate;
	}

	public void setMonthlyrate(Double monthlyrate) {
		this.monthlyrate = monthlyrate;
	}

	public int getPickup_hubId() {
		return pickup_hubId;
	}

	public void setPickup_hubId(int pickup_hubId) {
		this.pickup_hubId = pickup_hubId;
	}

	public int getReturn_hubId() {
		return return_hubId;
	}

	public void setReturn_hubId(int return_hubId) {
		this.return_hubId = return_hubId;
	}

	public List<BookingDetailDTO> getBookingDetails() {
		return bookingDetails;
	}

	public void setBookingDetails(List<BookingDetailDTO> bookingDetails) {
		this.bookingDetails = bookingDetails;
	}

	private String emailId;
    private Double dailyrate;
    private Double weeklyrate;
    private Double monthlyrate;
    private int pickup_hubId;
    private int return_hubId;
    private List<BookingDetailDTO> bookingDetails;

    public BookingHeaderDTO(Long bookingId, LocalDate bookingdate, String firstname, String lastname, 
                            String emailId, Double dailyrate, Double weeklyrate, Double monthlyrate, 
                            int pickup_hubId, int return_hubId, List<BookingDetailDTO> bookingDetails) {
        this.bookingId = bookingId;
        this.bookingdate = bookingdate;
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailId = emailId;
        this.dailyrate = dailyrate;
        this.weeklyrate = weeklyrate;
        this.monthlyrate = monthlyrate;
        this.pickup_hubId = pickup_hubId;
        this.return_hubId = return_hubId;
        this.bookingDetails = bookingDetails;
    }

    // Getters and setters
}