package com.contact_project.Smart.Contact.Manager.controller;

import com.contact_project.Smart.Contact.Manager.entity.Contacts;
import com.contact_project.Smart.Contact.Manager.entity.User;
import com.contact_project.Smart.Contact.Manager.service.ContactService;
import com.contact_project.Smart.Contact.Manager.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ContactController {
    @Autowired
    private ContactService contactService;

    @Autowired
    private UserService userService;
//    @GetMapping("/contacts")
//    public List<Contacts> getAllContacts(){
//        return this.contactService.getAllContacts();
//    }

    @GetMapping("/contacts")
    public List<Contacts> getUserContacts(Authentication authentication) {

        String email = authentication.getName();

        User user = userService.getUserByEmail(email);

        return contactService.getAllContacts(user);
    }

    @PostMapping("/contacts")
    public Contacts addContacts(@RequestBody Contacts contacts, Authentication authentication){
        String email = authentication.getName();

        return contactService.addContacts(contacts, email);
    }

    @DeleteMapping("/contacts/{id}")
    public String deleteContact(@PathVariable int id) {

        contactService.deleteContact(id);

        return "Contact deleted successfully";
    }

    @PutMapping("/contacts/{id}/favourite")
        public Contacts toggleFavourite(@PathVariable int id,Authentication authentication ){
        String email=authentication.getName();
        User user=userService.getUserByEmail(email);
        return contactService.toggleFavourite(id,user);
    }

    @PutMapping("/contacts/{id}")
    public Contacts updateContact(
            @PathVariable int id,
            @RequestBody Contacts updatedContact,
            Authentication authentication) {

        String email = authentication.getName();

        User user = userService.getUserByEmail(email);

        return contactService.updateContact(
                id,
                updatedContact,
                user
        );
    }
}
