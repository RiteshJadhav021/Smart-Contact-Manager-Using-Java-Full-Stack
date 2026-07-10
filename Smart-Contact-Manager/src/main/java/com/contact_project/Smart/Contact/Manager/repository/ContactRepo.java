package com.contact_project.Smart.Contact.Manager.repository;

import com.contact_project.Smart.Contact.Manager.entity.Contacts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepo extends JpaRepository<Contacts,Integer> {

}
