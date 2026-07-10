package com.contact_project.Smart.Contact.Manager.repository;

import com.contact_project.Smart.Contact.Manager.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Integer> {
    Optional<User> findByEmail(String email);
}
