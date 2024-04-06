package com.group.cineMille.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.cineMille.models.Cinema;
import com.group.cineMille.models.interfaces.ICineService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CineController {
	
	@Autowired
	private ICineService cineService;

	@GetMapping("/cinema")
	public ResponseEntity<Cinema>  getCinema() {
		return ResponseEntity.ok(cineService.getCinema());
	}
	
}
