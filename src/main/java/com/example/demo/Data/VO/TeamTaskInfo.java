package com.example.demo.Data.VO;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

// TeamTaskInfo Entity
@Entity
@Table(name="Team_Task_Info_TB")
@Data
public class TeamTaskInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="task_id")
    private int taskId;

    @ManyToOne
    @JoinColumn(name="note_id")
    private NoteInfo noteInfo;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @Column(name="DueDate")
    private LocalDate dueDate;

    @Column(name="IsCompleted")
    private boolean isCompleted;

    // getters, setters, constructors
}