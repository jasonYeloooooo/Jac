package com.example.jasonandcathy.pojo;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.Date;

@Data
public class Work {
    private String name;
    private Date date;
    private String firstShiftStart;
    private String firstShiftEnd;
    private String secondShiftStart;
    private String secondShiftEnd;
    private float totalHour;
    private float income;
    @NotNull
    private Integer id;
}
