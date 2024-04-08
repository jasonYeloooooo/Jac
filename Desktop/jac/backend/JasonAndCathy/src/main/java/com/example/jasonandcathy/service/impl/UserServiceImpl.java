package com.example.jasonandcathy.service.impl;

import com.example.jasonandcathy.mapper.UserMapper;
import com.example.jasonandcathy.pojo.User;
import com.example.jasonandcathy.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;


    @Override
    public void update(User user) {

    }

    @Override
    public User findByUserName(String name) {


        return userMapper.findByUserName(name);
    }

    @Override
    public User register(String name) {
        return userMapper.findByUserName(name);
    }

    @Override
    public void updateAvatar(String url) {

    }

    @Override
    public void updatePwd(String new_pwd) {

    }
}
