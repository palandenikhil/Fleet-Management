package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Models.UserDetails;



@Repository
public interface UserRepository extends JpaRepository<UserDetails, Long>{
	UserDetails findByEmail(String email);
}
