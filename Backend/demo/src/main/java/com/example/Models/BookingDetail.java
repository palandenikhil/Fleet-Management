package com.example.Models;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Data;
// import lombok.NoArgsConstructor;
// import lombok.AllArgsConstructor;

@Entity
@Data

public class BookingDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long bookingDetailId;  // Primary key, auto-generated

    @ManyToOne
    @JoinColumn(nullable = false, name="bookingId",referencedColumnName="bookingId")
    @JsonBackReference // Prevent infinite recursion
    private BookingHeader bookingId;  // Foreign key to Booking entity

    private Long addonId;  

    private Double addonRate;

	public Long getBookingDetailId() {
		return bookingDetailId;
	}

	public void setBookingDetailId(Long bookingAddonId) {
		this.bookingDetailId = bookingAddonId;
	}

	public BookingHeader getBookingId() {
		return bookingId;
	}

	public void setBookingId(BookingHeader bookingId) {
		this.bookingId = bookingId;
	}

	public Long getAddonId() {
		return addonId;
	}

	public void setAddonId(Long addonId) {
		this.addonId = addonId;
	}

	public Double getAddonRate() {
		return addonRate;
	}

	public void setAddonRate(Double addonRate) {
		this.addonRate = addonRate;
	}

	public BookingDetail(Long bookingAddonId, BookingHeader bookingId, Long addonId, Double addonRate) {
		super();
		this.bookingDetailId = bookingAddonId;
		this.bookingId = bookingId;
		this.addonId = addonId;
		this.addonRate = addonRate;
	}  
	
	// public BookingDetail() {
		
	// }

	@Override
	public String toString() {
		return "BookingDetail [bookingAddonId=" + bookingDetailId + ", bookingId=" + bookingId + ", addonId=" + addonId
				+ ", addonRate=" + addonRate + "]";
	}
    	
 }