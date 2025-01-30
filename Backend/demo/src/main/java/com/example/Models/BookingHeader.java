package com.example.Models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@Entity
@Table(name = "booking")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingHeader {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;  

    public Long getBookingid() {
        return bookingid;
    }

    public void setBookingid(Long bookingid) {
        this.bookingid = bookingid;
    }
    
    @Column(nullable = false)
    private Long custid; 
    
    public Long getCustid() {
        return custid;
    }

    public void setCustid(Long custid) {
        this.custid = custid;
    }

    @Column(nullable = false)
    private LocalDate startdate;
    

    public LocalDate getStartdate() {
        return startdate;
    }

    public void setStartdate(LocalDate startdate) {
        this.startdate = startdate;
    }

    @Column(nullable = false)
    private LocalDate enddate;  
    
    public LocalDate getEnddate() {
        return enddate;
    }

    public void setEnddate(LocalDate enddate) {
        this.enddate = enddate;
    }

    @ManyToOne
    @JoinColumn(name = "cartypeId",referencedColumnName = "cartypeId", nullable = false)  
    private CarTypeMaster cartypeid; 
    
    public CarTypeMaster getCartypeid() {
        return cartypeid;
    }

    public void setCartypeid(CarTypeMaster cartypeid) {
        this.cartypeid = cartypeid;
    }

    
    @Column(nullable = false)
    private String name;  // Customer name
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(nullable = false)
    private String address;  // Customer address
    
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Column(nullable = false)
    private String state;  // Customer state
    
    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    @Column(nullable = false)
    private String pin; 
    
    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }
    

    private Double dailyrate;  // Reference to daily rate

    private Double weeklyrate;  // Reference to weekly rate

    private Double monthlyrate;  // Reference to monthly rate
    
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
    
}