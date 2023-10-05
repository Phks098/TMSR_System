package com.example.demo.Data.VO;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="Note_Type_TB")
@Data
public class NoteType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="note_type_id")
    private int noteTypeId;

    @Column(name="note_type_name")
    private String noteTypeName;

   
}