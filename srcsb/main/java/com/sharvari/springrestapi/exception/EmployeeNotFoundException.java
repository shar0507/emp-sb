package com.sharvari.springrestapi.exception;

public class EmployeeNotFoundException extends RuntimeException {
	
	public EmployeeNotFoundException(Long id) {
	super("Cannot find employee with id "+id);
	}

}
