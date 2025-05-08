package com.bridge.example.finalproject.service;

import com.bridge.example.finalproject.entity.AccountEntity;
import org.slf4j.Logger;
import com.bridge.example.finalproject.repository.AccountRepository;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    private static final Logger log = LoggerFactory.getLogger(AccountService.class);
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public AccountEntity addNewAccount(AccountEntity account){return accountRepository.save(account);}

}
