package com.bridge.example.finalproject.service;

import com.bridge.example.finalproject.entity.AccountEntity;
import com.bridge.example.finalproject.entity.CharacterEntity;
import org.slf4j.Logger;
import com.bridge.example.finalproject.repository.AccountRepository;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private static final Logger log = LoggerFactory.getLogger(AccountService.class);
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public AccountEntity addNewAccount(AccountEntity account){return accountRepository.save(account);}

    public List<AccountEntity> getAccounts(){return accountRepository.findAll();}


    public CharacterEntity addNewCharacter(CharacterEntity character, Long accountId){
        AccountEntity account = accountRepository.findById(accountId).orElseThrow(IllegalArgumentException::new);
        account.getCharacters().add(character);
        accountRepository.save(account);
        return account.getCharacters().contains(character) ? character : null;

    }

    public List<CharacterEntity> getCharacters(Long accountId){
        AccountEntity account = accountRepository.findById(accountId).orElseThrow(IllegalArgumentException::new);
        return account.getCharacters();
    }


}
