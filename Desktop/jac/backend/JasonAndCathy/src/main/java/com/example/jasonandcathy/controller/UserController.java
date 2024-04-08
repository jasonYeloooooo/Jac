package com.example.jasonandcathy.controller;


import com.example.jasonandcathy.pojo.Result;
import com.example.jasonandcathy.pojo.User;
import com.example.jasonandcathy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    public User UserInfo(String username){
        return userService.findByUserName(username);
    }


    @GetMapping("/register")
    public Result register(String username){
       User user =  userService.register(username);
       if(user == null) return Result.error("cannot find user");
       return Result.success(user.toString()) ;
    }

    @GetMapping("/login")
    public Result login(String username,String password){

        User user = userService.register(username);
        if(!(user.getUsername().equals(username) && user.getPassword().equals(password))){
            return Result.error("wrong password");
        }
        return Result.success("login");
    }



}
