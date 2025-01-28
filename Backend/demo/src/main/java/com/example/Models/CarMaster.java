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
    private Long carid;  

    @Column(nullable = false)
    private Long carTypeid;  

    private String cardtl;  

    @ManyToOne
    @JoinColumn(name = "hubid", nullable = false, referencedColumnName="hubId") 
    private HubMaster hub_id;  // Reference to HubMaster entity

    @Column(nullable = false)
    private Boolean isavailable;  
    @Column(nullable = false)
    private LocalDate maintenanceduedate;  
}