package com.example.demo.Data.DAO;

import com.example.demo.Data.VO.Schedule;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    @Query("SELECT new com.example.demo.Data.DAO.UserJoinResult(u.userId as userID, ty.typeName as type_name ) FROM User u JOIN UserType ty ON u.userType.code = ty.code")
    List<UserJoinResult> findJoinTest();

}