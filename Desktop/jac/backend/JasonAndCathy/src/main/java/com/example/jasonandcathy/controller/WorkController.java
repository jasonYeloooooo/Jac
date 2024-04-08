package com.example.jasonandcathy.controller;

import com.example.jasonandcathy.pojo.Result;
import com.example.jasonandcathy.pojo.Work;
import com.example.jasonandcathy.service.WorkService;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Date;

@RestController
@RequestMapping("/work")
public class WorkController {

    @Autowired
    private WorkService workService;

    private Work get(String date){
        return workService.getWork(date);
    }


    private ArrayList<Work> getWeek(int week){
        return workService.getNumberOfWeek(week);
    }


    @GetMapping("/info")
    private Result getWork(String date){
        Work work = get(date);
        if(work == null) return Result.error("No Work information");
        Gson gson = new Gson();

        String json = gson.toJson(work);
        return Result.success(json);
    }


    @GetMapping("/searchByWeek")
    private Result getWorkOfThisWeek(int week){
        ArrayList<Work> works = getWeek(week);
        if(works.isEmpty()){
            return Result.error("No this week information");
        }
        return Result.success(works);
    }

    @GetMapping("/searchByMonth")
    private Result searchMonth(int month){
        ArrayList<Work> works = workService.searchWork(month);
        if(works.isEmpty()){
            return Result.error("No this week information");
        }
        return Result.success(works);
    }



    @PostMapping("/add")
    private Result addWork(String name,String date,String firstShiftStart, String firstShiftEnd, String secondShiftStart, String secondShiftEnd){
        if(date == null){
            return Result.error("null value");
        }
        if(get(date)!= null){
            return Result.error("already created");
        }

        workService.addWork(name,date,firstShiftStart,firstShiftEnd,secondShiftStart,secondShiftEnd);

        return Result.success();
    }

    @GetMapping("/weekPaid")
    private Result weekPaid(int week){
        float income = workService.weekPaid(week);

        return Result.success(income);
    }
    @GetMapping("/monthPaid")
    private Result monthPaid(int month){
        float income = workService.monthPaid(month);

        return Result.success(income);
    }
}
