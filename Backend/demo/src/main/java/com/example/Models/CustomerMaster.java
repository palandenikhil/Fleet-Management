package com.example.Models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
public class CustomerMaster {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int custId;

    private String custName;
    
    private String password;
    
    private String emailId;

    private String address1;

    private String address2;

    @ManyToOne
    @JoinColumn(name = "cityId" , nullable = false,referencedColumnName = "cityId")
    private CityMaster city;

    @ManyToOne
    @JoinColumn(name = "stateId" , nullable = false,referencedColumnName = "stateId")
    private StateMaster state;

    private String pin;

    private String phone;

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}
	
	public String getEmailId() {
		return emailId;
	}
	
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAddress1() {
		return address1;
	}

	public void setAddress1(String address1) {
		this.address1 = address1;
	}

	public String getAddress2() {
		return address2;
	}

	public void setAddress2(String address2) {
		this.address2 = address2;
	}

	public CityMaster getCity() {
		return city;
	}

	public void setCity(CityMaster city) {
		this.city = city;
	}

	public StateMaster getState() {
		return state;
	}

	public void setState(StateMaster state) {
		this.state = state;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "CustomerMaster [custId=" + custId + ", custName=" + custName + ", address1=" + address1 + ", address2="
				+ address2 + ", pin=" + pin + ", phone=" + phone + "]";
	}

	public CustomerMaster(Integer custId, String custName, String address1, String address2, CityMaster city,
			StateMaster state, String pin, String phone) {
		super();
		this.custId = custId;
		this.custName = custName;
		this.address1 = address1;
		this.address2 = address2;
		this.city = city;
		this.state = state;
		this.pin = pin;
		this.phone = phone;
	}

    
}
