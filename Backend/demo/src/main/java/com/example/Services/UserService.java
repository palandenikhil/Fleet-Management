package com.example.Services;

import java.util.List;
import java.util.Optional;

import com.example.Models.UserDetails;


public interface UserService {
	 void addUser(UserDetails user);
	 List<UserDetails> getAllUser();
	 UserDetails getUserByEmailId(String email);
	 Optional<UserDetails> getUserByid(int email);
	 void removeByEmail(String email);
	 void updateUserByEmail(String email,UserDetails user);
}
