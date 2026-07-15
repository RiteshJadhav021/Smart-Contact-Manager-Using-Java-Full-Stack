package com.contact_project.Smart.Contact.Manager.controller;

import com.contact_project.Smart.Contact.Manager.entity.Contacts;
import com.contact_project.Smart.Contact.Manager.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ContactController {
    @Autowired
    private ContactService contactService;
    @GetMapping("/contacts")
    public List<Contacts> getAllContacts(){
        return this.contactService.getAllContacts();
    }

    @PostMapping("/contacts")
    public Contacts addContacts(@RequestBody Contacts contacts, Authentication authentication){
        String email = authentication.getName();

        return contactService.addContacts(contacts, email);
    }
}
