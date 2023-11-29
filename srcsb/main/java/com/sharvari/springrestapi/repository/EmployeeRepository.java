package com.sharvari.springrestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sharvari.springrestapi.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

}
