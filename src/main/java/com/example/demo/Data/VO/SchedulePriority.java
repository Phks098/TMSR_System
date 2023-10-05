package com.example.demo.Data.VO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Schedule_Priority_TB")
@Data
public class SchedulePriority {

    @Id
    @Column(name = "priority_code")
    private int priorityCode;

    @Column(name = "priority_name")
    private String priorityName;

    @Column(name = "priority_score")
    private int priorityScore;

    // Getters, setters, and other methods...
}
