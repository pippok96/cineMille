package com.group.cineMille.models;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Sala implements Serializable {


	private static final long serialVersionUID = 8976302508684909990L;
	private Long id;
	private String nome;
	private Long posti;
	private String tecnologia;

}
