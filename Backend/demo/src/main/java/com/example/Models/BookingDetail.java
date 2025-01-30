package com.example.Models;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Long bookingAddonId;  // Primary key, auto-generated

    @ManyToOne
    @JoinColumn(nullable = false,referencedColumnName="bookingId")
    private BookingHeader bookingId;  // Foreign key to Booking entity
    
    @ManyToOne
    @JoinColumn(nullable = false, referencedColumnName="addonid")  
    private AddOnMaster addonid;  

    @ManyToOne
    @JoinColumn(nullable = false,referencedColumnName="addonid")
    private AddOnMaster addonRate;  
 }