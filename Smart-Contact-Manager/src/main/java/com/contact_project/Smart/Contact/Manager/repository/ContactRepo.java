package com.contact_project.Smart.Contact.Manager.repository;

import com.contact_project.Smart.Contact.Manager.entity.Contacts;
import com.contact_project.Smart.Contact.Manager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ContactRepo extends JpaRepository<Contacts,Integer> {
    List<Contacts> findByUser(User user);

    Optional<Contacts> findByIdAndUser(int id,User user);
}
