package com.contact_project.Smart.Contact.Manager.controller;

import com.contact_project.Smart.Contact.Manager.dto.UserDto;
import com.contact_project.Smart.Contact.Manager.entity.User;
import com.contact_project.Smart.Contact.Manager.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@CrossOrigin(origins = "http://localhost:5173")
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
