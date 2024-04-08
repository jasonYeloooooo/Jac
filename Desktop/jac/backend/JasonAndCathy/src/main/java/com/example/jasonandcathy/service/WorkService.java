package com.example.jasonandcathy.service;

import com.example.jasonandcathy.pojo.Work;


import java.util.ArrayList;



public interface WorkService {

    Work createWork(Work work);

    Work[] getWorks();
    Work getWork(String date);


    void addWork(String name, String date, String firstShiftStart, String firstShiftEnd, String secondShiftStart, String secondShiftEnd);

    ArrayList<Work> searchWork(int month);

    ArrayList<Work> getNumberOfWeek(int week);

    /**
     * need to add year later
     */
    float monthPaid(int month);

    float weekPaid(int week);
}
