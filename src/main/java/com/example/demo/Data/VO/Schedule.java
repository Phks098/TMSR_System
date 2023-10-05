package com.example.demo.Data.VO;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Schedules_TB")
@Data
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "schedules_id")
    private int schedulesId;

    @Column(name = "user_id", nullable = false)
    private String userId;

    @Column(nullable = false)
    private String title;

    @Column
    private String contents;

    @Column(name = "category_id")
    private Integer categoryId;

    @Column(name = "start_date_time", nullable = false)
    private LocalDateTime startDateTime;

    @Column(name = "end_date_time", nullable = false)
    private LocalDateTime endDateTime;

    @Column(name = "priority_id")
    private Integer priorityId;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id", insertable = false, updatable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "priority_id", referencedColumnName = "priority_code", insertable = false, updatable = false)
    private SchedulePriority schedulePriority;

    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "code", insertable = false, updatable = false)
    private RecurringGroup recurringGroup;

    // Getters, setters, and other methods...
}
