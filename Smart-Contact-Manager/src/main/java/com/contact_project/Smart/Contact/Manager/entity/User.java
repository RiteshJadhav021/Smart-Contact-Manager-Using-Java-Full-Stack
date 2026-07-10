package com.contact_project.Smart.Contact.Manager.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;
    @Column(unique = true)
    private String email;
    private String password;

    private String role;

   @OneToMany(mappedBy = "user",cascade = CascadeType.ALL,orphanRemoval = true)
     @JsonManagedReference
   private List<Contacts> contactlist=new ArrayList<>();

    public List<Contacts> getContactlist() {
        return contactlist;
    }

    public void setContactlist(List<Contacts> contactlist) {
        this.contactlist = contactlist;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public User() {
    }
}
