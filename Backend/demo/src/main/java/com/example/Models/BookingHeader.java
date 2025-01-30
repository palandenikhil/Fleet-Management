package com.example.Models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "booking")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;  

    @Column(nullable = false)
    private LocalDate bookingdate;  
    
   
    @ManyToOne
    @JoinColumn(name = "customerId")
    private CustomerMaster customerId;  

    @Column(nullable = false)
    private LocalDate startdate;  

    @Column(nullable = false)
    private LocalDate enddate;  
    
    @ManyToOne
    @JoinColumn(name = "carId",referencedColumnName = "carId", nullable = false)  
    private CarTypeMaster carId;  

    @ManyToOne
    @JoinColumn(name = "cartypeId",referencedColumnName = "cartypeId", nullable = false)  
    private CarTypeMaster cartypeId;  
    
    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<BookingDetail> bookingDetails = new ArrayList<BookingDetail>();

    
    @Column(nullable = false)
    private String firstname;  // Customer name
    
    @Column(nullable = false)
    private String lastname;

    @Column(nullable = false)
    private String address;  // Customer address

    @Column(nullable = false)
    private String state;  // Customer state

    @Column(nullable = false)
    private String pin; 
    
    @Column(nullable=false)
    private String emailId;
    

    private Double dailyrate;  // Reference to daily rate

    private Double weeklyrate;  // Reference to weekly rate

    private Double monthlyrate;  // Reference to monthly rate
    
    private int pickup_hubId;
	
    private int return_hubId;

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public LocalDate getDate() {
		return bookingdate;
	}

	public void setDate(LocalDate bookingdate) {
		this.bookingdate = bookingdate;
	}

//	public Long getCustid() {
//		return custid;
//	}

//	public void setCustid(Long customerId) {
//		this.customerId = customerId;
//	}

	public LocalDate getStartdate() {
		return startdate;
	}

	public CustomerMaster getCustomer() {
		return customerId;
	}

	public void setCustomer(CustomerMaster customer) {
		this.customerId = customerId;
	}

	public CarTypeMaster getCarId() {
		return carId;
	}

	public void setCarId(CarTypeMaster carId) {
		this.carId = carId;
	}

	public CarTypeMaster getCartypeId() {
		return cartypeId;
	}

	public void setCartypeId(CarTypeMaster cartypeId) {
		this.cartypeId = cartypeId;
	}

	public List<BookingDetail> getBookingDetails() {
		return bookingDetails;
	}

	public void setBookingDetails(List<BookingDetail> bookingDetails) {
		this.bookingDetails = bookingDetails;
	}

	public void setStartdate(LocalDate startdate) {
		this.startdate = startdate;
	}

	public LocalDate getEnddate() {
		return enddate;
	}

	public void setEnddate(LocalDate enddate) {
		this.enddate = enddate;
	}

	public CarTypeMaster getCartypeid() {
		return cartypeId;
	}

	public void setCartypeid(CarTypeMaster cartypeId) {
		this.cartypeId = cartypeId;
	}

	

	public LocalDate getBookingdate() {
		return bookingdate;
	}

	public void setBookingdate(LocalDate bookingdate) {
		this.bookingdate = bookingdate;
	}

	public CustomerMaster getCustomerId() {
		return customerId;
	}

	public void setCustomerId(CustomerMaster customerId) {
		this.customerId = customerId;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
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

	
    
    public BookingHeader(Long bookingId, LocalDate bookingdate, CustomerMaster customerId, LocalDate startdate,
			LocalDate enddate, CarTypeMaster carId, CarTypeMaster cartypeId, List<BookingDetail> bookingDetails,
			String firstname, String lastname, String address, String state, String pin, String emailId,
			Double dailyrate, Double weeklyrate, Double monthlyrate, int pickup_hubId, int return_hubId) {
		super();
		this.bookingId = bookingId;
		this.bookingdate = bookingdate;
		this.customerId = customerId;
		this.startdate = startdate;
		this.enddate = enddate;
		this.carId = carId;
		this.cartypeId = cartypeId;
		this.bookingDetails = bookingDetails;
		this.firstname = firstname;
		this.lastname = lastname;
		this.address = address;
		this.state = state;
		this.pin = pin;
		this.emailId = emailId;
		this.dailyrate = dailyrate;
		this.weeklyrate = weeklyrate;
		this.monthlyrate = monthlyrate;
		this.pickup_hubId = pickup_hubId;
		this.return_hubId = return_hubId;
	}

	public BookingHeader() {
    	
    }

	@Override
	public String toString() {
		return "BookingHeader [bookingId=" + bookingId + ", bookingdate=" + bookingdate + ", customerId=" + customerId
				+ ", startdate=" + startdate + ", enddate=" + enddate + ", carId=" + carId + ", cartypeId=" + cartypeId
				+ ", bookingDetails=" + bookingDetails + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", address=" + address + ", state=" + state + ", pin=" + pin + ", emailId=" + emailId + ", dailyrate="
				+ dailyrate + ", weeklyrate=" + weeklyrate + ", monthlyrate=" + monthlyrate + ", pickup_hubId="
				+ pickup_hubId + ", return_hubId=" + return_hubId + "]";
	}

	
    
    
}