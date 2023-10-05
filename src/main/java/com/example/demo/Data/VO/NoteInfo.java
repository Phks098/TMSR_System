package com.example.demo.Data.VO;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

// NoteInfo Entity
@Entity
@Table(name="Note_Info_TB")
@Data
public class NoteInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="note_id")
    private int noteId;

    @ManyToOne
    @JoinColumn(name="team_id")
    private TeamInfo teamInfo;

    @Column(nullable=false)
    private String title;

    private String context;

    @Column(name="create_date")
    private Date createDate;

    @ManyToOne
    @JoinColumn(name="note_type_id")
    private NoteType noteType;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    // getters, setters, constructors
}