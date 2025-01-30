package com.example.Models;

import java.time.LocalDate;

import org.aspectj.apache.bcel.generic.LOOKUPSWITCH;
import org.springframework.cglib.core.Local;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

 
    //private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "bookingid" , nullable = false,referencedColumnName = "bookingid")
    private BookingHeader booking;
    
    private String cName; 
	private String cEmailId; 
	private String cMobileNo; 
	private String cAadharNo; 
	private String cPassNo; 

<<<<<<< HEAD
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "custId" , nullable = false,referencedColumnName = "custId")
=======
    @ManyToOne
    @JoinColumn(name = "customerId" , nullable = false,referencedColumnName = "customerId")
>>>>>>> b7ffdaa3a0139ffd2d34ec4e5ece3372b7037bce
    private CustomerMaster customer;
    
    private int pickup_hubId;
    	
    private int return_hubId;

    @Enumerated(EnumType.STRING)
	@Column(name = "isReturned", length = 1)
	private Return_Status isReturned;
    
    public enum Return_Status 
    {
        Y, N
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
    
    public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getcEmailId() {
		return cEmailId;
	}

	public void setcEmailId(String cEmailId) {
		this.cEmailId = cEmailId;
	}

	public String getcMobileNo() {
		return cMobileNo;
	}

	public void setcMobileNo(String cMobileNo) {
		this.cMobileNo = cMobileNo;
	}

	public String getcAadharNo() {
		return cAadharNo;
	}

	public void setcAadharNo(String cAadharNo) {
		this.cAadharNo = cAadharNo;
	}

	public String getcPassNo() {
		return cPassNo;
	}

	public void setcPassNo(String cPassNo) {
		this.cPassNo = cPassNo;
	}

	@Temporal(TemporalType.DATE)
    private LocalDate handoverDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "carId" , nullable = false,referencedColumnName = "carid")
    private CarMaster car;

    @Temporal(TemporalType.DATE)
    private LocalDate returnDate;

    private double rentalAmt;

    private double totalAddOnAmt;

    private double totalAmt;

    //private String customerDetails;

    private String rate;

	public Long getInvoiceId() {
		return invoiceId;
	}

	public void setInvoiceId(Long invoiceId) {
		this.invoiceId = invoiceId;
	}

//	public LocalDate getDate() {
//		return date;
//	}
//
//	public void setDate(LocalDate date) {
//		this.date = date;
//	}

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

//	public String getCustomerDetails() {
//		return customerDetails;
//	}
//
//	public void setCustomerDetails(String customerDetails) {
//		this.customerDetails = customerDetails;
//	}

	public String getRate() {
		return rate;
	}

	public void setRate(String rate) {
		this.rate = rate;
	}

	public Return_Status getIsReturned() {
		return isReturned;
<<<<<<< HEAD
	}

	public void setIsReturned(Return_Status isReturned) {
		this.isReturned = isReturned;
	}

	@Override
	public String toString() {
		return "InvoiceHeader [invoiceId=" + invoiceId + ", booking=" + booking + ", cName=" + cName + ", cEmailId="
				+ cEmailId + ", cMobileNo=" + cMobileNo + ", cAadharNo=" + cAadharNo + ", cPassNo=" + cPassNo
				+ ", customer=" + customer + ", pickup_hubId=" + pickup_hubId + ", return_hubId=" + return_hubId
				+ ", isReturned=" + isReturned + ", handoverDate=" + handoverDate + ", car=" + car + ", returnDate="
				+ returnDate + ", rentalAmt=" + rentalAmt + ", totalAddOnAmt=" + totalAddOnAmt + ", totalAmt="
				+ totalAmt + ", rate=" + rate + "]";
	}

=======
	}

	public void setIsReturned(Return_Status isReturned) {
		this.isReturned = isReturned;
	}

	@Override
	public String toString() {
		return "InvoiceHeader [invoiceId=" + invoiceId + ", booking=" + booking + ", cName=" + cName + ", cEmailId="
				+ cEmailId + ", cMobileNo=" + cMobileNo + ", cAadharNo=" + cAadharNo + ", cPassNo=" + cPassNo
				+ ", customer=" + customer + ", pickup_hubId=" + pickup_hubId + ", return_hubId=" + return_hubId
				+ ", isReturned=" + isReturned + ", handoverDate=" + handoverDate + ", car=" + car + ", returnDate="
				+ returnDate + ", rentalAmt=" + rentalAmt + ", totalAddOnAmt=" + totalAddOnAmt + ", totalAmt="
				+ totalAmt + ", rate=" + rate + "]";
	}

>>>>>>> b7ffdaa3a0139ffd2d34ec4e5ece3372b7037bce


	

    
}