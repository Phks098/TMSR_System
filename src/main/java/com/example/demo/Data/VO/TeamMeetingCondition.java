package com.example.demo.Data.VO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="Team_Meeting_Condition_TB")
@Data
public class TeamMeetingCondition {
    @Id
    @Column(name="note_id")
    private int noteId;

    @Column(name="expected_duration")
    private int expectedDuration;

    @Column(name="essntial_member_weight")
    private float essentialMemberWeight;

    @Column(name="general_memver_weight")
    private float generalMemberWeight;

    // getters, setters, constructors
}
