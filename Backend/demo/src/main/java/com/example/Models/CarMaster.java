package com.example.Models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDate;

@Entity
@Data 
@NoArgsConstructor 
@AllArgsConstructor 
public class CarMaster {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long carId;  

    @ManyToOne
    @JoinColumn(name = "carTypeId", nullable = false, referencedColumnName="carTypeId")
    private CarTypeMaster carTypeId;  
    
    private String carName;  
    
    @Column(unique = true)
    private String numberPlate;
    
    private String fuelStatus;
    

    @ManyToOne
    @JoinColumn(name = "hubId", nullable = false, referencedColumnName="hubId") 
    private HubMaster hub_id;  // Reference to HubMaster entity
    
    @Enumerated(EnumType.STRING)
    @Column(name = "Is_Available", length = 1)
    private AvailabilityStatus isAvailable;
    
    @Column(nullable = false)
    private LocalDate maintenanceduedate;  
    
    public enum AvailabilityStatus {
        Y, N
    }

}