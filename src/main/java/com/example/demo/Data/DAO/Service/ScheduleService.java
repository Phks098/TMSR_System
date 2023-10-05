package com.example.demo.Data.DAO.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Data.DAO.ScheduleRepository;
import com.example.demo.Data.DAO.UserJoinResult;
import com.example.demo.Data.VO.Schedule;

@Service
public class ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    public List<Schedule> getAllSchedules() {
        return scheduleRepository.findAll();
    }

    public void printJoin(){
        List<UserJoinResult> list = scheduleRepository.findJoinTest();
        for(UserJoinResult ary : list){
            System.out.println(ary);
        }
    }
}