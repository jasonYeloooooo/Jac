package com.example.jasonandcathy.pojo;



import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

import java.time.LocalDateTime;

//lombook 编译阶段 为实体类自动生成getter setter 方法
//pom引入依赖 加入注解
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class User {
    @NotNull
    private Integer id;//主键ID
    private String username;//用户名
    @JsonIgnore  //让springmvc把当前对象转换为json字符串的时候，忽略password，最终的json自负窜中没有password这个属性
    private String password;//密码
    @NotEmpty
    @Email
    private String email;//邮箱
    private Integer age;
    private LocalDateTime loginTime;//创建时间

}
