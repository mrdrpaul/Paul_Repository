package com.bridge.example.finalproject.repository;

import com.bridge.example.finalproject.entity.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DungeonRepository extends JpaRepository<AccountEntity, Long> {
}
