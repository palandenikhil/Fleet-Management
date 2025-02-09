package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.Models.UserLogin;



@Repository
public interface UserRepository extends JpaRepository<UserLogin, Long>{
	// @Query(value="SELECT * FROM user_login u WHERE u.email = :email",nativeQuery=true)
	UserLogin findByEmail(String email);
	
}
