package com.group.cineMille.utils;

import java.io.File;
import java.io.FileInputStream;

import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Component;

@Component
public class ExcelUtils {

	public Sheet getSheet(String filename) throws Exception {
		FileInputStream file = new FileInputStream(new File(filename));
		Workbook workbook = new XSSFWorkbook(file);
		
		Sheet out = workbook.getSheetAt(0);
		
		workbook.close();
		
		return out;
	}

}
