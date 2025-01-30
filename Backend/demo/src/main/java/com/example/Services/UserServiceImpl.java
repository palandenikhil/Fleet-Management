package com.example.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.UserDetails;
import com.example.Repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepos;

	@Override
	public void addUser(UserDetails user) {
		userRepos.save(user);		
	}

	@Override
	public List<UserDetails> getAllUser() {
		// TODO Auto-generated method stub
		return userRepos.findAll();
	}

	@Override
	public UserDetails getUserByEmailId(String email) {
		// TODO Auto-generated method stub
		return userRepos.findByEmail(email);
	}

	@Override
	public Optional<UserDetails> getUserByid(int id) {
		// TODO Auto-generated method stub
		return userRepos.findById((long) id);
	}

	@Override
	public void removeByEmail(String email) {
		// TODO Auto-generated method stub
		UserDetails user=userRepos.findByEmail(email);
		if(user!=null) {
			userRepos.delete(user);
		}
	}

	@Override
	public void updateUserByEmail(String email, UserDetails user) {
		UserDetails existingUser = userRepos.findByEmail(email);
        if (existingUser != null) {
            existingUser.setUserName(user.getUserName());
            existingUser.setLastName(user.getLastName());
            existingUser.setPassword(user.getPassword());
            userRepos.save(existingUser);
        }
	}

	
}
