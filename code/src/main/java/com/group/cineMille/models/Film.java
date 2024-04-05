package com.group.cineMille.models;

import java.io.Serializable;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Film implements Serializable {

	private static final long serialVersionUID = 5309325407366702444L;
	
	private Long id;
	private String nome;
	private Date dataUscita;
	private String locandina; //path dell'immagine
	private Long durata;
}
