package com.example.demo.Data.VO;



import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@IdClass(TeamMemberInfoId.class)
@Data
@Table(name="Team_Member_Info_TB")
public class TeamMemberInfo {
    @Id
    @Column(name="team_id")
    private int teamId;

    @Id
    @Column(name="user_id")
    private String userId;

    private String role;

    @Column(name="joinat", nullable=false)
    private Date joinAt;

    private boolean authority;

    // getters, setters, constructors
}