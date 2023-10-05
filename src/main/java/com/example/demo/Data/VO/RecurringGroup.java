package com.example.demo.Data.VO;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Recurring_Group_TB")
@Data
public class RecurringGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int code;

    // Getters, setters, and other methods...
}