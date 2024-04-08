package com.example.jasonandcathy.service;
import com.example.jasonandcathy.pojo.User;

public interface UserService {

    void update(User user);

    //根据用户名查询用户
    User findByUserName(String name );

    User register(String name);

    //更新头像
    void updateAvatar(String url);

    //更新密码
    void updatePwd(String new_pwd);
}
