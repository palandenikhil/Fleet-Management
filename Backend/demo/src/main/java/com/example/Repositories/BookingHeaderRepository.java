package com.example.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Models.BookingHeader;

@Repository
public interface BookingHeaderRepository extends JpaRepository<BookingHeader, Long> {
	
}

