package com.example.jasonandcathy.service.impl;

import com.example.jasonandcathy.mapper.DebtMapper;
import com.example.jasonandcathy.pojo.Debt;
import com.example.jasonandcathy.service.DebtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;


@Service
public class DebtServiceImpl implements DebtService {

    @Autowired
    DebtMapper mapper;

    @Override
    public ArrayList<Debt> getAllDebt() {
        return mapper.getAllDebt();
    }

    @Override
    public  ArrayList<Debt> getUnPayDebt() {
        return mapper.getUnPayDebt();
    }

    @Override
    public  ArrayList<Debt> getPaidDebt() {
        return mapper.getPaidDebt();
    }

    @Override
    public void addDebt(String debtor, String borrower, int amount, String status, Date date, String note) {

        mapper.addDebt(debtor,borrower,amount,status,date,note);

    }


}
