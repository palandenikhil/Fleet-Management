package com.example.Models;

import java.time.LocalDate;

import org.aspectj.apache.bcel.generic.LOOKUPSWITCH;
import org.springframework.cglib.core.Local;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class InvoiceHeader {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long invoiceId;

 
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "bookingid" , nullable = false,referencedColumnName = "bookingid")
    private BookingHeader booking;

    @ManyToOne
    @JoinColumn(name = "custId" , nullable = false,referencedColumnName = "custId")
    private CustomerMaster customer;
    
    @Temporal(TemporalType.DATE)
    private LocalDate handoverDate;

    @ManyToOne
    @JoinColumn(name = "carId" , nullable = false,referencedColumnName = "carId")
    private CarMaster car;

    @Temporal(TemporalType.DATE)
    private LocalDate returnDate;

    private double rentalAmt;

    private double totalAddOnAmt;

    private double totalAmt;

    private String customerDetails;

    private String rate;

	public Long getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(Long invoiceId) {
		this.invoiceId = invoiceId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public BookingHeader getBooking() {
		return booking;
	}

	public void setBooking(BookingHeader booking) {
		this.booking = booking;
	}

	public CustomerMaster getCustomer() {
		return customer;
	}

	public void setCustomer(CustomerMaster customer) {
		this.customer = customer;
	}

	public LocalDate getHandoverDate() {
		return handoverDate;
	}

	public void setHandoverDate(LocalDate handoverDate) {
		this.handoverDate = handoverDate;
	}

	public CarMaster getCar() {
		return car;
	}

	public void setCar(CarMaster car) {
		this.car = car;
	}

	public LocalDate getReturnDate() {
		return returnDate;
	}

	public void setReturnDate(LocalDate returnDate) {
		this.returnDate = returnDate;
	}

	public double getRentalAmt() {
		return rentalAmt;
	}

	public void setRentalAmt(double rentalAmt) {
		this.rentalAmt = rentalAmt;
	}

	public double getTotalAddOnAmt() {
		return totalAddOnAmt;
	}

	public void setTotalAddOnAmt(double totalAddOnAmt) {
		this.totalAddOnAmt = totalAddOnAmt;
	}

	public double getTotalAmt() {
		return totalAmt;
	}

	public void setTotalAmt(double totalAmt) {
		this.totalAmt = totalAmt;
	}

	public String getCustomerDetails() {
		return customerDetails;
	}

	public void setCustomerDetails(String customerDetails) {
		this.customerDetails = customerDetails;
	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	@Override
	public String toString() {
		return "InvoiceHeader [invoiceId=" + invoiceId + ", date=" + date + ", customer=" + customer + ", handoverDate="
				+ handoverDate + ", car=" + car + ", returnDate=" + returnDate + ", rentalAmt=" + rentalAmt
				+ ", totalAddOnAmt=" + totalAddOnAmt + ", totalAmt=" + totalAmt + ", customerDetails=" + customerDetails
				+ ", rate=" + rate + "]";
	}

    
}
