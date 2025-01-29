package com.example.Controllers;

import com.example.Models.HubMaster;
import com.example.Services.HubService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/hubs")
public class HubController {

    @Autowired
    private HubService hubService;

    @GetMapping("/city/{cityId}")
    public List<HubMaster> getHubsByCity(@PathVariable Long cityId) {
        return hubService.getHubsByCity(cityId);
    }
}
