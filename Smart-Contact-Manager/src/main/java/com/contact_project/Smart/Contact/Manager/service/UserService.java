package com.contact_project.Smart.Contact.Manager.service;

import com.contact_project.Smart.Contact.Manager.entity.User;
import com.contact_project.Smart.Contact.Manager.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService {
    @Autowired
    private UserRepo userRepo;

    //get all users
    public List<User> getAllUsers(){
        return this.userRepo.findAll();
    }

    public User addUser(User u){
        return this.userRepo.save(u);
    }


}
