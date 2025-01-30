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
<<<<<<< HEAD
    private LocalDate maintenanceduedate;
    
    public Long getCarid() {
        return carid;
    }

    public void setCarid(Long carid) {
        this.carid = carid;
    }

    public Long getCarTypeid() {
        return carTypeid;
    }

    public void setCarTypeid(Long carTypeid) {
        this.carTypeid = carTypeid;
    }

    public String getCardtl() {
        return cardtl;
    }

    public void setCardtl(String cardtl) {
        this.cardtl = cardtl;
    }

    public HubMaster getHub_id() {
        return hub_id;
    }

    public void setHub_id(HubMaster hub_id) {
        this.hub_id = hub_id;
    }

    public Boolean getIsavailable() {
        return isavailable;
    }

    public void setIsavailable(Boolean isavailable) {
        this.isavailable = isavailable;
    }

    public LocalDate getMaintenanceduedate() {
        return maintenanceduedate;
    }

    public void setMaintenanceduedate(LocalDate maintenanceduedate) {
        this.maintenanceduedate = maintenanceduedate;
    }
=======
    private LocalDate maintenanceduedate;  
    
    public enum AvailabilityStatus {
        Y, N
    }

>>>>>>> b7ffdaa3a0139ffd2d34ec4e5ece3372b7037bce
}