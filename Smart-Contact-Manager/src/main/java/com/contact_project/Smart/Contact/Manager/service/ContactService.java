package com.contact_project.Smart.Contact.Manager.service;

import com.contact_project.Smart.Contact.Manager.entity.Contacts;
import com.contact_project.Smart.Contact.Manager.entity.User;
import com.contact_project.Smart.Contact.Manager.repository.ContactRepo;
import com.contact_project.Smart.Contact.Manager.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Component
public class ContactService {
    @Autowired
    private ContactRepo contactRepo;



    @Autowired
    private UserRepo userRepo;

    public List<Contacts> getAllContacts(User user){
        return this.contactRepo.findByUser(user);
    }

    public Contacts addContacts(Contacts c,String email){
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        c.setUser(user);

        return contactRepo.save(c);
    }

    public void deleteContact(int id) {
        contactRepo.deleteById(id);
    }

    public Contacts toggleFavourite(int id, User user) {

        Contacts contact = contactRepo.findByIdAndUser(id, user)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        contact.setFavourite(!contact.isFavourite());

        return contactRepo.save(contact);
    }

    public Contacts updateContact(int id, Contacts updatedContact, User user) {

        Contacts existingContact = contactRepo
                .findByIdAndUser(id, user)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        existingContact.setName(updatedContact.getName());
        existingContact.setEmail(updatedContact.getEmail());
        existingContact.setPhone(updatedContact.getPhone());
        existingContact.setAddress(updatedContact.getAddress());
        existingContact.setCompany(updatedContact.getCompany());
        existingContact.setTag(updatedContact.getTag());

        return contactRepo.save(existingContact);
    }



}
