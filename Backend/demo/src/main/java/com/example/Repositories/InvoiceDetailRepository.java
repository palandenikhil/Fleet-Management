package com.example.Repositories;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Models.InvoiceDetails;

@Repository
public interface InvoiceDetailRepository extends JpaRepository<InvoiceDetails, Long> {
   
}