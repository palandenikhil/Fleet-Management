package com.example.Models;

import jakarta.persistence.*;

@Entity
public class CarTypeMaster {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartypeId;

    private String carTypeName;

    private Double dailyRate;

    private Double weeklyRate;

    private Double monthlyRate;

    private String imagePath;

    // Getters and Setters
    public Long getCartypeId() {
        return cartypeId;
    }

    public void setCartypeId(Long cartypeId) {
        this.cartypeId = cartypeId;
    }

    public String getCarTypeName() {
        return carTypeName;
    }

    public void setCarTypeName(String carTypeName) {
        this.carTypeName = carTypeName;
    }

    public Double getDailyRate() {
        return dailyRate;
    }

    public void setDailyRate(Double dailyRate) {
        this.dailyRate = dailyRate;
    }

    public Double getWeeklyRate() {
        return weeklyRate;
    }

    public void setWeeklyRate(Double weeklyRate) {
        this.weeklyRate = weeklyRate;
    }

    public Double getMonthlyRate() {
        return monthlyRate;
    }

    public void setMonthlyRate(Double monthlyRate) {
        this.monthlyRate = monthlyRate;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }
}
