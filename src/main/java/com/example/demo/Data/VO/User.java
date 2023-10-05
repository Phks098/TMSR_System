package com.example.demo.Data.VO;

import java.time.LocalDateTime;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "Users_TB")
@Data
public class User {

    @Id
    @Column(name = "user_id")
    private String userId;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private char gender;

    @Column(name = "type_code", nullable = false)
    private int typeCode;

    @Column(name = "joindate", nullable = false)
    private LocalDateTime joinDate;

    @ManyToOne
    @JoinColumn(name = "type_code", referencedColumnName = "code", insertable = false, updatable = false)
    private UserType userType;

    // Getters, setters, and other methods...
}

