package com.example.Models;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserLogin {
    private static final Logger logger = LogManager.getLogger(UserLogin.class);
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    
    private String userName;
    
    private String firstName;
    
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    private String lastName;
    
    private String email;
    
    private String password;
    
    private String role;

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        if (userid == null) {
            logger.error("ERROR: Attempted to set null UserID");
        }
        logger.debug("Setting User ID: {}", userid);
        this.userid = userid;
    }

    public String getUserName() {
        if (userName == null || userName.isEmpty()) {
            logger.error("ERROR: UserName cannot be null or empty");
        }
        logger.debug("Setting UserName: {}", userName);
        return userName;
    }

    public void setUserName(String userName) {
        if (userName == null || userName.isEmpty()) {
            logger.error("ERROR: UserName cannot be null or empty");
        }
        logger.debug("Setting UserName: {}", userName);
        this.userName = userName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        if (lastName == null || lastName.isEmpty()) {
            logger.error("ERROR: LastName cannot be null or empty");
        }
        logger.debug("Setting LastName: {}", lastName);
        this.lastName = lastName;
    }

    public String getEmail() {
        if (email == null || email.isEmpty()) {
            logger.error("ERROR: Email cannot be null or empty");
        }
        logger.debug("Setting Email: {}", email);
        return email;
    }

    public void setEmail(String email) {
        if (email == null || email.isEmpty()) {
            logger.error("ERROR: Email cannot be null or empty");
        }
        logger.debug("Setting Email: {}", email);
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        if (password == null || password.length() < 8) {
            logger.error("ERROR: Password cannot be null or less than 8 characters");
        }
        logger.debug("Setting Password for user: {}", this.userName);
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        if (role == null || role.isEmpty()) {
            logger.error("ERROR: Role cannot be null or empty");
        }
        logger.debug("Setting Role: {}", role);
        this.role = role;
    }

    public UserLogin() {
        logger.info("UserLogin object created");
    }

    public UserLogin(Long userid, String userName, String firstName, String lastName, String email, String password, String role) {
        super();
        this.userid = userid;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        logger.info("UserLogin constructor initialized with values: {}", this);
    }

    @Override
    public String toString() {
        return "UserDetails [userid=" + userid + ", userName=" + userName + ", firstName=" + firstName + ", lastName="
                + lastName + ", email=" + email + ", password=" + password + ", role=" + role + "]";
    }
}
