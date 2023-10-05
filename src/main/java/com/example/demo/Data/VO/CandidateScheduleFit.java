package com.example.demo.Data.VO;


import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="Candidate_Schedule_Fit_TB")
@Data
public class CandidateScheduleFit {
    @Id
    @Column(name="note_id")
    private int noteId;

    @Column(name="cand_schedule_id")
    private int candidateScheduleId;

    private LocalDate date;

    @Column(name="start_time")
    private LocalTime startTime;

    @Column(name="end_time")
    private LocalTime endTime;

    @Column(name="required_member_fit")
    private float requiredMemberFit;

    @Column(name="essential_member_fit")
    private float essentialMemberFit;

    @Column(name="recommendation_fit")
    private float recommendationFit;

    private int ranking;

    // getters, setters, constructors
}