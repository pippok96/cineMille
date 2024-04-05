package com.group.cineMille.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group.cineMille.models.Cinema;
import com.group.cineMille.models.interfaces.ICineService;

@RestController
public class CineController {
	
	@Autowired
	private ICineService cineService;

	@GetMapping("/cinema")
	public Cinema getCinema() {
		return cineService.getCinema();
	}
	
}
