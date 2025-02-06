package com.example.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Models.UserLogin;
import com.example.Services.UserService;

@RestController
@RequestMapping("/register")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/add")
	public UserLogin addUser(@RequestBody UserLogin user) {
		userService.addUser(user);
		return user;
	}
	
	@GetMapping
	public List<UserLogin> getAllUser(){
		return userService.getAllUser();
	}
	
	@GetMapping("/{email}")
	public UserLogin getUserByEmailId(@PathVariable String email) {
		return userService.getUserByEmailId(email);
	}
	
	@GetMapping("/id/{id}")
	public Optional<UserLogin> getUserById(@PathVariable int id) {
		return userService.getUserByid(id);
	}
	
	@DeleteMapping("/{email}")
    public void removeUserByEmail(@PathVariable String email) {
        userService.removeByEmail(email);
    }
	
	@PutMapping("/update/{email}")
    public UserLogin updateUserByEmail(@PathVariable String email, @RequestBody UserLogin user) {
        userService.updateUserByEmail(email, user);
        return userService.getUserByEmailId(email);
    }
}
