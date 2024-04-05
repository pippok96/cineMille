package com.group.cineMille.models;

import java.io.Serializable;
import java.time.LocalTime;
import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Proiezione implements Serializable {

	private static final long serialVersionUID = 3986199619206875851L;

	private Long id;
	private Film film;
	private Sala sala;
	private Date dataInizio;
	private Date dataFine;
	private LocalTime orario;
}
