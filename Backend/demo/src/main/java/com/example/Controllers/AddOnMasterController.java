package com.example.Controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Models.AddOnMaster;
import com.example.Services.AddOnMasterService;

@RestController
@RequestMapping("/api/addons")
public class AddOnMasterController {

    @Autowired
    private AddOnMasterService addOnMasterService; // Autowiring the service to interact with the database

    // Endpoint to get all AddOns
    @GetMapping
    public ResponseEntity<List<AddOnMaster>> getAllAddOns() {
        List<AddOnMaster> addOns = addOnMasterService.getAllAddOns();
        if (addOns.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // No content found
        }
        return new ResponseEntity<>(addOns, HttpStatus.OK); // Return list of AddOns
    }

    // Endpoint to get an AddOn by its ID
    @GetMapping("/{addonId}")
    public ResponseEntity<AddOnMaster> getAddOnById(@PathVariable Long addonId) {
        AddOnMaster addOnMaster = addOnMasterService.getAddOnById(addonId);
        if (addOnMaster == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return 404 if AddOn is not found
        }
        return new ResponseEntity<>(addOnMaster, HttpStatus.OK); // Return AddOn if found
    }

    // Endpoint to delete an AddOn by its ID
    @DeleteMapping("/{addonId}")
    public ResponseEntity<String> deleteAddOnById(@PathVariable Long addonId) {
        AddOnMaster addOnMaster = addOnMasterService.deleteAddOnById(addonId);
        if (addOnMaster == null) {
            return new ResponseEntity<>("AddOn not found", HttpStatus.NOT_FOUND); // 404 if not found
        }
        return new ResponseEntity<>("AddOn deleted successfully", HttpStatus.OK); // Success message
    }

    // Endpoint to update an AddOn
    @PutMapping("/{addonId}")
    public ResponseEntity<AddOnMaster> updateAddOn(
            @PathVariable Long addonId,
            @RequestBody AddOnMaster updatedAddOn) {
        AddOnMaster updated = addOnMasterService.updateAddOn(addonId, updatedAddOn);
        if (updated == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return 404 if AddOn to update is not found
        }
        return new ResponseEntity<>(updated, HttpStatus.OK); // Return updated AddOn
    }

    // Endpoint to create a new AddOn (Optional, if required)
    @PostMapping
    public ResponseEntity<AddOnMaster> createAddOn(@RequestBody AddOnMaster addOnMaster) {
        AddOnMaster createdAddOn = addOnMasterService.createAddOn(addOnMaster); // Assuming you create a createAddOn method in the service
        return new ResponseEntity<>(createdAddOn, HttpStatus.CREATED); // Return created AddOn with status 201
    }
}
