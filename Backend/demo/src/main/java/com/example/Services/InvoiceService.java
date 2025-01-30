package com.example.Services;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Models.BookingHeader;
import com.example.Models.CarMaster;
import com.example.Models.InvoiceHeader;
import com.example.Repositories.BookingHeaderRepository;
import com.example.Repositories.CarMasterRepository;
import com.example.Repositories.InvoiceDetailRepository;
import com.example.Repositories.InvoiceHeaderRepository;


public interface InvoiceService {
	
	InvoiceHeader addInvoice(InvoiceHeader invoice);
	List<InvoiceHeader> getbillingbybookid(int id);
	List<InvoiceHeader> getbillingbyEmailid(String Email);
	void update(double totalAddonAmount,double totalAmount,double rentalAmount,long invoiceId);
   
}
