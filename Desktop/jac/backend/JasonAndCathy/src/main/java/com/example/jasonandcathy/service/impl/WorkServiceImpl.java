package com.example.jasonandcathy.service.impl;

import com.example.jasonandcathy.mapper.UserMapper;
import com.example.jasonandcathy.mapper.WorkMapper;
import com.example.jasonandcathy.pojo.Work;
import com.example.jasonandcathy.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.WeekFields;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;

@Service
public class WorkServiceImpl implements WorkService {

    @Autowired
    private WorkMapper workMapper;

    @Override
    public Work createWork(Work work) {
        return null;
    }

    @Override
    public Work[] getWorks() {
        return null;
    }

    @Override
    public Work getWork(String dateStr) {
        Date date = transferString2Date(dateStr);
        return workMapper.findWork(date);
    }



    @Override
    public void addWork(String name, String date, String firstShiftStart, String firstShiftEnd, String secondShiftStart, String secondShiftEnd) {
        // 定义时间格式化器
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");

        // 将字符串时间解析为 LocalTime 对象
        LocalTime startTime1 = LocalTime.parse(firstShiftStart, formatter);
        LocalTime endTime1 = LocalTime.parse(firstShiftEnd, formatter);
        Duration duration = Duration.between(startTime1, endTime1);


        LocalTime startTime2 = LocalTime.parse(secondShiftStart, formatter);
        LocalTime endTime2 = LocalTime.parse(secondShiftEnd, formatter);
        Duration duration2 = Duration.between(startTime2, endTime2);


        Duration totalDuration = duration.plus(duration2);

        float hours = totalDuration.toHours();
        float minutes = totalDuration.toMinutes() % 60;
        float result = hours + (minutes/60);

        LocalDate localDate = LocalDate.parse(date);
        WeekFields weekFields = WeekFields.of(java.time.DayOfWeek.MONDAY,1);

        int weekNumber = localDate.get(weekFields.weekOfWeekBasedYear());

        int month = localDate.getMonthValue();


        workMapper.addWork( name,date,firstShiftStart,firstShiftEnd,secondShiftStart,secondShiftEnd,result,result*23,weekNumber,month);
    }

    @Override
    public ArrayList<Work> searchWork(int month) {
        return workMapper.searchByMonth(month);
    }

    @Override
    public ArrayList<Work> getNumberOfWeek(int week) {
        return workMapper.getWeek(week);
    }

    @Override
    public float monthPaid(int month) {
        return workMapper.yearPaid(month);
    }

    @Override
    public float weekPaid(int week) {


        return workMapper.weekPaid(week);
    }


    public static Date transferString2Date(String s) {
        Date date = new Date();
        try {
            date = new SimpleDateFormat("yyyy-MM-dd").parse(s);
        } catch (ParseException e) {
            //LOGGER.error("时间转换错误, string = {}", s, e);
        }
        return date;
    }

}
