package com.contact_project.Smart.Contact.Manager.controller;

import com.contact_project.Smart.Contact.Manager.dto.UserDto;
import com.contact_project.Smart.Contact.Manager.entity.User;
import com.contact_project.Smart.Contact.Manager.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
   public List<User> getAllUsers(){
       return this.userService.getAllUsers();
    }

    @PostMapping("/users")
    public User addUser(@Valid @RequestBody UserDto userDto){
        return this.userService.addUser(userDto);
    }
}
