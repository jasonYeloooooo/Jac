package com.example.jasonandcathy.mapper;

import com.example.jasonandcathy.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {

    @Select("Select * From user where username = #{name}")
    User findByUserName(String name);



}
