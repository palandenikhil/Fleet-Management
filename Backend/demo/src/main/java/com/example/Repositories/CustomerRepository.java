package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.Models.CustomerMaster;

import jakarta.transaction.Transactional;

public interface CustomerRepository extends JpaRepository<CustomerMaster,Integer>{
	
	@Query(value = "SELECT * FROM customer_master WHERE email = :email", nativeQuery = true)
	CustomerMaster getCustomerByEmailId(@Param("email") String email);
	
	@Query(value = "SELECT * FROM customer_master WHERE customer_id = :id", nativeQuery = true)
	CustomerMaster getCustomerById(@Param("id") int id);
	
	@Transactional
    @Modifying
    @Query(value = "UPDATE customer_master SET first_name = :firstName, last_name = :lastName, email = :email WHERE customer_id = :id", nativeQuery = true)
    void updateCustomer(@Param("id") int id, @Param("firstName") String firstName, @Param("lastName") String lastName, @Param("email") String email);
	
	 @Transactional
	 @Modifying
	 @Query(value = "DELETE FROM customer_master WHERE customer_id = :id", nativeQuery = true)
	 void deleteCustomer(@Param("id") int id);
	 
//	 @Query(value = "SELECT COUNT(*) FROM customer_master WHERE email = :email AND password = :password", nativeQuery = true)
//	    int login(@Param("email") String email, @Param("password") String password);
}
