package com.group.cineMille.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group.cineMille.models.Cinema;
import com.group.cineMille.models.interfaces.ICineRepository;
import com.group.cineMille.models.interfaces.ICineService;

@Service
public class CineService implements ICineService {
	
	@Autowired
	private ICineRepository repo;

	@Override
	public Cinema getCinema() {
		Cinema out = new Cinema();
		
		try {
			out.setProiezioni(repo.getProiezioni());
		} catch (Exception e) {
			//log
			e.printStackTrace();
		}
		
		return out;
	}
}
