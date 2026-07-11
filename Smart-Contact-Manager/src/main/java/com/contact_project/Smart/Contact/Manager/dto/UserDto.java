package com.contact_project.Smart.Contact.Manager.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDto {
    @NotBlank(message = "Name Cannot Be Empty.")
    private String name;
    @Email(message = "Enter a valid email")
    @NotBlank(message = "Email cannot Be Empty")
    private String email;
    @Size(min=6, message = "The password should be atleast 6 characters")
    private String password;

    public UserDto() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
