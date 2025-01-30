package com.example.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Models.InvoiceHeader;
import com.example.Services.InvoiceService;



@RestController
@RequestMapping("/api")
@CrossOrigin
public class InvoiceHeaderController {

	@Autowired
	private InvoiceService invoice_service;
	
	@GetMapping("/invoice/{id}") 
	public List<InvoiceHeader> getbillingbybookid(@PathVariable int id) {
		return invoice_service.getbillingbybookid(id);
	}
	@PostMapping("/invoice")
	public InvoiceHeader addInvoice(@RequestBody InvoiceHeader invoice)
	{
		return invoice_service.addInvoice(invoice);
	}
	@GetMapping("/invoice/email/{email}") 
	public List<InvoiceHeader> getbillingbyemailid(@PathVariable String email) {
		return invoice_service.getbillingbyEmailid(email);
	}
	@GetMapping("/invoice/{totalAddonAmount}/{totalAmount}/{rentalAmount}/{invoiceId}") 
	public void update(@PathVariable double totalAddonAmount,@PathVariable double totalAmount,@PathVariable double rentalAmount,@PathVariable long invoiceId) {
		invoice_service.update(totalAddonAmount, totalAmount, rentalAmount, invoiceId);
	}
}