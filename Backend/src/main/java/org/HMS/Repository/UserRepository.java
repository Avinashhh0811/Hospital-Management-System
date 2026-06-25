package org.HMS.Repository;

import org.HMS.Entity.Hospital;
import org.HMS.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.List;

public interface UserRepository
        extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);


    boolean existsByHospital(Hospital hospital);
    List<User> findByRoleRoleName(String roleName);

    void deleteById(Long id);
}