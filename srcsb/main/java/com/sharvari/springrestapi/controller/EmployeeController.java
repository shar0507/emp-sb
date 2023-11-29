package com.sharvari.springrestapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sharvari.springrestapi.exception.EmployeeNotFoundException;
import com.sharvari.springrestapi.model.Employee;
import com.sharvari.springrestapi.repository.EmployeeRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@PostMapping("/employee")
	Employee newEmployee(@RequestBody Employee newEmployee) {
		return employeeRepository.save(newEmployee);
	}
	
	@GetMapping("/list")
	List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	
	@DeleteMapping("/employee/{id}")
	String deleteEmployee(@PathVariable Long id){
		if(!employeeRepository.existsById(id)) {
			throw new EmployeeNotFoundException(id);
		}
		employeeRepository.deleteById(id);
		return "Employee with id "+id+" has been deleted successfully";
	}
	

}
