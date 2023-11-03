package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.Data.DAO.Service.ScheduleService;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {
	


	@Autowired
    private ScheduleService scheduleService;
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);	
		System.out.println("s");
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		scheduleService.printJoin();
	}


}
