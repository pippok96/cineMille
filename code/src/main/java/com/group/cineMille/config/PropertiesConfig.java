package com.group.cineMille.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import lombok.Getter;


@Configuration
public class PropertiesConfig {

	@Value("${business.filmFilePath}")
	private String filmFilePath;
	
	@Value("${business.proiezioniFilePath}")
	private String proiezioniFilePath;

	@Value("${business.saleFilePath}")
	private String saleFilePath;

	public String getFilmFilePath() {
		return filmFilePath;
	}

	public String getProiezioniFilePath() {
		return proiezioniFilePath;
	}

	public String getSaleFilePath() {
		return saleFilePath;
	}
	
}
