package com.example.service;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import com.example.Models.UserLogin;
import com.example.Repositories.UserRepository;
import com.example.Services.UserService;
import com.example.demo.DemoApplication;

@SpringBootTest(classes = DemoApplication.class)
public class UserServiceTest {
    
    @MockBean
    private UserRepository userRepository;
    
    @Autowired
    private UserService userservice;

    @Test
    void testGetUserById() {
        UserLogin mockUser = new UserLogin();
        mockUser.setUserName("rozer");
        mockUser.setEmail("abc@gmail.com");

        when(userRepository.findByEmail("abc@gmail.com")).thenReturn(mockUser);

        UserLogin user = userservice.getUserByEmailId("abc@gmail.com");
        assertEquals(mockUser, user);
    }
}