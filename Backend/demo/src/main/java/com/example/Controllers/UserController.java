package com.example.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.Models.UserLogin;
import com.example.Services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
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

	// @PostMapping("/login")
	// public ResponseEntity<String> loginUser(@RequestBody UserLogin user) {
	// 	UserLogin existingUser = userService.getUserByEmailId(user.getEmail());

	// 	if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
	// 		return ResponseEntity.ok("Login successful!"); // You can also return a token here
	// 	} else {
	// 		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
	// 	}
	// }

	@GetMapping
	public List<UserLogin> getAllUser() {
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
