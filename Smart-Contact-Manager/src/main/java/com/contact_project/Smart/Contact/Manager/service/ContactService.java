package com.contact_project.Smart.Contact.Manager.service;

import com.contact_project.Smart.Contact.Manager.entity.Contacts;
import com.contact_project.Smart.Contact.Manager.repository.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ContactService {
    @Autowired
    private ContactRepo contactRepo;

    public List<Contacts> getAllContacts(){
        return this.contactRepo.findAll();
    }

    public Contacts addContacts(Contacts c){
        return this.contactRepo.save(c);
    }
}
