package com.example.jasonandcathy.controller;


import com.example.jasonandcathy.pojo.Debt;
import com.example.jasonandcathy.pojo.Result;
import com.example.jasonandcathy.pojo.User;
import com.example.jasonandcathy.service.DebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

@RestController
@RequestMapping("/debate")
public class DebtController {

    @Autowired
    private DebtService  DebtService;

    @GetMapping("/all")
    public Result allDebate(){

        ArrayList<Debt> all = DebtService.getAllDebt();

        return Result.success(all) ;
    }

    @GetMapping("/unpay")
    public Result unpayDebate(){

        ArrayList<Debt> unpay = DebtService.getUnPayDebt();

        return Result.success(unpay) ;
    }

    @GetMapping("/paid")
    public Result paidDebate(){

        ArrayList<Debt> paid = DebtService.getPaidDebt();

        return Result.success(paid) ;
    }


    @PostMapping("/add")
    public Result addDebate(String debtor, String borrower, int amount, String status, String date, String note){
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        Date d = new Date();
        try {
            // 将字符串解析为日期对象
          d = dateFormat.parse(date);
            System.out.println("Parsed date: " + date);
        } catch (ParseException e) {
            // 解析失败，处理异常情况
            e.printStackTrace();
        }
        DebtService.addDebt(debtor,borrower,amount,status,d,note);
        return Result.success();
    }
}
