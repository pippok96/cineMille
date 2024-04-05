package com.group.cineMille.repositories;

import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.group.cineMille.config.PropertiesConfig;
import com.group.cineMille.models.Film;
import com.group.cineMille.models.Proiezione;
import com.group.cineMille.models.Sala;
import com.group.cineMille.models.interfaces.ICineRepository;
import com.group.cineMille.utils.ExcelUtils;

@Repository
public class CineRepository implements ICineRepository {
	
	@Autowired
	private PropertiesConfig properties;
	
	@Autowired
	private ExcelUtils excelUtils;
	
	@Override
	public List<Film> getFilm() throws Exception {
		Sheet sheet = excelUtils.getSheet(properties.getFilmFilePath());
		List<Film> out = new ArrayList<>();
		
		for (Row row : sheet) {
			Film film = new Film();
			
			if (row.getRowNum() > 0) {//salto le intestazioni
			    for (Cell cell : row) {	    		
			    		
			    		switch (cell.getColumnIndex()) {
				            case 0:  
				            	film.setId(Double.valueOf(cell.getNumericCellValue()).longValue());
				            	break;
				            	
				            case 1: 
				            	film.setNome(cell.getStringCellValue());		            	
				            	break;
				            	
				            case 2:  
				            	film.setDataUscita(cell.getDateCellValue());
				            	break;
				            	
				            case 3:  
				            	film.setLocandina(cell.getStringCellValue());
				            	break;
				            	
				            case 4:  
				            	film.setDurata(Double.valueOf(cell.getNumericCellValue()).longValue());
				            	break;
			    		}
			    		
			    }	
			    
			    out.add(film);
		    }

		}
		
		return out;
	}
	
	
	
	@Override
	public List<Proiezione> getProiezioni() throws Exception {
		Sheet sheet = excelUtils.getSheet(properties.getProiezioniFilePath());
		List<Proiezione> out = new ArrayList<>();
		
		for (Row row : sheet) {
			Proiezione proiezione = new Proiezione();
			
			if (row.getRowNum() > 0) {//salto le intestazioni
			    for (Cell cell : row) {	    		
			    		
			    		switch (cell.getColumnIndex()) {
				            case 0:  
				            	proiezione.setId(Double.valueOf(cell.getNumericCellValue()).longValue());
				            	break;
				            	
				            case 1: 
				            	proiezione.setSala(getSalaById(Double.valueOf(cell.getNumericCellValue()).longValue()));
				            	break;
				            	
				            case 2:  
				            	proiezione.setFilm(getFilmById(Double.valueOf(cell.getNumericCellValue()).longValue()));
				            	break;
				            	
				            case 3:  
				            	proiezione.setDataInizio(cell.getDateCellValue());
				            	break;
				            	
				            case 4:  
				            	proiezione.setDataFine(cell.getDateCellValue());
				            	break;
				            	
				            case 5:
				            	proiezione.setOrario(cell.getLocalDateTimeCellValue().toLocalTime());
				            	break;
			    		}
			    		
			    }	
			    
			    out.add(proiezione);
		    }

		}
		
		return out;
	}
	
	@Override
	public List<Sala> getSale() throws Exception {
		Sheet sheet = excelUtils.getSheet(properties.getSaleFilePath());
		List<Sala> out = new ArrayList<>();
		
		for (Row row : sheet) {
			Sala sala = new Sala();
			
			if (row.getRowNum() > 0) {//salto le intestazioni
			    for (Cell cell : row) {	    		
			    		
			    		switch (cell.getColumnIndex()) {
				            case 0:  
				            	sala.setId(Double.valueOf(cell.getNumericCellValue()).longValue());
				            	break;
				            	
				            case 1: 
				            	sala.setNome(cell.getStringCellValue());		            	
				            	break;
				            	
				            case 2:  
				            	sala.setPosti(Double.valueOf(cell.getNumericCellValue()).longValue());
				            	break;
				            	
				            case 3:  
				            	sala.setTecnologia(cell.getStringCellValue());
				            	break;
			    		}
			    		
			    }	
			    
			    out.add(sala);
		    }

		}
		
		return out;
	}
	
	
	// ******************* PRIVATE METHOD ****************************
	
	private Film getFilmById(Long id) {
		List<Film> films = new ArrayList<>();
		
		try {
			films = getFilm();
		} catch (Exception e) {
			//log
		}
		
		return films.stream().filter(f -> f.getId().equals(id)).findFirst().orElse(null);
	}
	
	private Sala getSalaById(Long id) {
		List<Sala> sale = new ArrayList<>();
		
		try {
			sale = getSale();
		} catch (Exception e) {
			//log
		}
		
		return sale.stream().filter(f -> f.getId().equals(id)).findFirst().orElse(null);
	}
	
}
