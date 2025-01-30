package com.example.Services;

import com.example.Models.UserDetails;

public interface LoginService {
	UserDetails getLogin(String email,String password);	
	
//	void updatePassword(String email,String password,String newPassword);
//	
//	void forgotPassword(String email,String newPassword);
}
