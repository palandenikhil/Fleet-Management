package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Models.UserDetails;

@Repository
public interface LoginRepository extends JpaRepository<UserDetails, Long>{
	@Query(value = "select * from user_details where email=:p1 and password=:p2",nativeQuery = true)
	public UserDetails getLogin(@Param("p1") String userEmail,@Param("p2") String password);
	
//	@Query(value = "select * from user_details where email=:email",nativeQuery = true)
//	public UserDetails findByEmail(@Param("email") String email);
}
