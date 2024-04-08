package com.example.jasonandcathy.mapper;

import com.example.jasonandcathy.pojo.Debt;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.ArrayList;
import java.util.Date;

@Mapper
public interface DebtMapper {

    @Select("Select * from Debt")
    ArrayList<Debt> getAllDebt();

    @Select("Select * from Debt where status = 'unpay'")
    ArrayList<Debt> getUnPayDebt();

    @Select("Select * from Debt where status = 'paid'")
    ArrayList<Debt> getPaidDebt();

    @Insert("Insert into Debt(debtor,Borrower,Date,Amount,Status,Note) " +
            "value(#{debtor},#{borrower},#{date},#{amount},#{status},#{note})")
    void addDebt(String debtor, String borrower,int amount, String status, Date date,String note);

}
