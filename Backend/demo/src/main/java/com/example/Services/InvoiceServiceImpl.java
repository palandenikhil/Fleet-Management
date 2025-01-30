package com.example.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.InvoiceHeader;
import com.example.Repositories.InvoiceHeaderRepository;

@Service
public class InvoiceServiceImpl implements InvoiceService{

	@Autowired
	private InvoiceHeaderRepository invoice_header_repository;
	
	public InvoiceHeader addInvoice(InvoiceHeader invoice) {
		// TODO Auto-generated method stub
		return invoice_header_repository.save(invoice);
		
	}

	
	public List<InvoiceHeader> getbillingbybookid(int id) {
		// TODO Auto-generated method stub
		return invoice_header_repository.getBillingByBookingId(id);
	}


	public List<InvoiceHeader> getbillingbyEmailid(String Email) {
		// TODO Auto-generated method stub
		return invoice_header_repository.getBillingByEmailId(Email);
	}

	
	public void update(double totalAddonAmount, double totalAmount, double rentalAmount, long invoiceId) {
		// TODO Auto-generated method stub
		invoice_header_repository.updateInvoiceNew(totalAddonAmount, totalAmount, rentalAmount, invoiceId);
	}
}
