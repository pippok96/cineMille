package com.group.cineMille.models.interfaces;

import java.util.List;

import com.group.cineMille.models.Film;
import com.group.cineMille.models.Proiezione;
import com.group.cineMille.models.Sala;

public interface ICineRepository {
	
	List<Proiezione> getProiezioni() throws Exception;
	List<Sala> getSale() throws Exception;
	List<Film> getFilm() throws Exception;
}
