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
    private Long bookingid;  

    @Column(nullable = false)
    private LocalDate date;  
    
    @Column(nullable = false)
    private Long custid;  

    @Column(nullable = false)
    private LocalDate startdate;  

    @Column(nullable = false)
    private LocalDate enddate;  

    @ManyToOne
    @JoinColumn(name = "cartypeId",referencedColumnName = "cartypeId", nullable = false)  
    private CarTypeMaster cartypeid;  

    
    @Column(nullable = false)
    private String name;  // Customer name

    @Column(nullable = false)
    private String address;  // Customer address

    @Column(nullable = false)
    private String state;  // Customer state

    @Column(nullable = false)
    private String pin; 
    

    private Double dailyrate;  // Reference to daily rate

    private Double weeklyrate;  // Reference to weekly rate

    private Double monthlyrate;  // Reference to monthly rate
    
}