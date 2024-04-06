package com.group.cineMille.models;

import java.io.Serializable;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Cinema implements Serializable {

	private static final long serialVersionUID = 6889614040597819100L;
	
	private List<Proiezione> proiezioni;
}
