package com.example.Repositories;

import org.springframework.stereotype.Repository;

import com.example.Models.InvoiceHeader;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

@Repository
public interface InvoiceHeaderRepository extends JpaRepository<InvoiceHeader,Integer>{
	@Query(value = "select * from InvoiceHeader where bookid = 1", nativeQuery = true)
	public List<InvoiceHeader> getBillingByBookingId(@Param("bookingId") int bookingId); 
	
	@Query(value = "select * from Invoice where c_email_id = :c_email_id and is_returned='N'", nativeQuery = true)
	public List<InvoiceHeader> getBillingByEmailId(@Param("c_email_id") String c_email_id); 
	
	@Transactional
	@Modifying
	@Query(value = "UPDATE Invoice SET is_returned = 'Y', total_addon_amount = :totalAddonAmount,total_amount = :totalAmount, end_date = NOW(), rental_amount = :rentalAmount WHERE invoice_id = :invoiceId",nativeQuery = true)
	void updateInvoiceNew(@Param("totalAddonAmount") double totalAddonAmount,@Param("totalAmount") double totalAmount, @Param("rentalAmount") double rentalAmount, @Param("invoiceId") long invoiceId);
}