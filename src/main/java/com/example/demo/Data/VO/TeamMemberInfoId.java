package com.example.demo.Data.VO;
import java.io.Serializable;

import lombok.Data;

@Data
public class TeamMemberInfoId implements Serializable {
    private int teamId;
    private String userId;

    // getters, setters, equals, hashCode
}