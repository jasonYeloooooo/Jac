package com.example.jasonandcathy.mapper;

import com.example.jasonandcathy.pojo.Work;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.ArrayList;
import java.util.Date;

@Mapper
public interface WorkMapper {

    @Select("Select * from work where date = #{date}")
    Work findWork(Date date);


    @Insert("Insert into work(name,date,firstShiftStart,firstShiftEnd,secondShiftStart,secondShiftEnd,totalHour,income,numberOfWeek,month)" +
            "value(#{name},#{date},#{firstShiftStart},#{firstShiftEnd},#{secondShiftStart},#{secondShiftEnd},#{totalHour},#{income},#{week},#{month})")
    void addWork(String name,String date, String firstShiftStart, String firstShiftEnd, String secondShiftStart, String secondShiftEnd,float totalHour,float income,int week,int month);

    @Select("Select * from work where numberOfWeek= #{week}")
    ArrayList<Work> getWeek(int week);

    @Select("Select * from work where month=#{month}")
    ArrayList<Work> searchByMonth(int month);

    @Select("Select SUM(income) from work where numberOfWeek=#{week}")
    float weekPaid(int week);

    @Select("Select SUM(income) from work where month=#{month}")
    float yearPaid(int month);
}
