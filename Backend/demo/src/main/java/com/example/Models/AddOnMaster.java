package com.example.Models;

import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class AddOnMaster {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long addonId;

	    private String addonName;

	    private Double addonDailyRate;

	    private LocalDate rateValidUpto;

	    // Getters and Setters
	    public Long getAddonId() {
	        return addonId;
	    }

	    public void setAddonId(Long addonId) {
	        this.addonId = addonId;
	    }

	    public String getAddonName() {
	        return addonName;
	    }

	    public void setAddonName(String addonName) {
	        this.addonName = addonName;
	    }

	    public Double getAddonDailyRate() {
	        return addonDailyRate;
	    }

	    public void setAddonDailyRate(Double addonDailyRate) {
	        this.addonDailyRate = addonDailyRate;
	    }

	    public LocalDate getRateValidUpto() {
	        return rateValidUpto;
	    }

	    public void setRateValidUpto(LocalDate rateValidUpto) {
	        this.rateValidUpto = rateValidUpto;
	    }
}
