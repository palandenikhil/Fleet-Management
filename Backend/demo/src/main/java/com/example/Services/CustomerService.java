package com.example.Services;

import java.util.List;
import java.util.Optional;

import com.example.Models.CustomerMaster;

public interface CustomerService 
{
	void addCustomer(CustomerMaster customer);
	 List<CustomerMaster> getAllCustomers();
	 CustomerMaster getCustomerByEmailId(String email);
	 Optional<CustomerMaster> getCustomerByid(int id);
	 void updateCustomer(int id, CustomerMaster updatedCustomer);
	 void deleteCustomer(int id);
	// boolean login(String email,String password);
}
