package com.contact_project.Smart.Contact.Manager.service;

import com.contact_project.Smart.Contact.Manager.dto.UserDto;
import com.contact_project.Smart.Contact.Manager.entity.User;
import com.contact_project.Smart.Contact.Manager.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    //get all users
    public List<User> getAllUsers(){
        return this.userRepo.findAll();
    }

    public User addUser(UserDto userDto){

        User existing=userRepo.findByEmail(userDto.getEmail()).orElse(null);

        if(existing !=null){
            throw new RuntimeException("Email already exist..");

        }

        User user=new User();
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        return this.userRepo.save(user);
    }


}
