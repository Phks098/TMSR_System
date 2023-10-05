package com.example.demo.Data.VO;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

// TeamMeetingNotice Entity
@Entity
@Table(name="Team_Meeting_Notice")
@Data
public class TeamMeetingNotice {
    @Id
    @Column(name="note_id")
    private int noteId;

    @Column(name="start_date")
    private Date startDate;

    @Column(name="end_date")
    private Date endDate;

    @Column(name="is_recommended")
    private boolean isRecommended;

    @Column(name="voteEndDate")
    private Date voteEndDate;

    @Column(name="scheduleConfirmed")
    private boolean scheduleConfirmed;

    // getters, setters, constructors
}
