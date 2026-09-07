package com.contact_project.Smart.Contact.Manager.repository;

import com.contact_project.Smart.Contact.Manager.entity.Contacts;
import com.contact_project.Smart.Contact.Manager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepo extends JpaRepository<Contacts,Integer> {
    List<Contacts> findByUser(User user);
}
