package com.example.jasonandcathy.pojo;


import lombok.Data;

import java.util.Date;

@Data
public class Debt {
    private int Id;
    private int Amount;
    private String Status;
    private String Borrower;
    private String Debtor;
    private Date Date;
    private String Note;

}
