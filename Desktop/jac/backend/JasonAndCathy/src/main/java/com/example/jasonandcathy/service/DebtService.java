package com.example.jasonandcathy.service;

import com.example.jasonandcathy.pojo.Debt;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;


public interface DebtService {


    ArrayList<Debt> getAllDebt();

    ArrayList<Debt> getUnPayDebt();

    ArrayList<Debt> getPaidDebt();


    void addDebt(String debtor, String borrower, int amount, String status, Date date, String note);



}
