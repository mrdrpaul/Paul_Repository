package com.bridge.example.finalproject.service;

import com.bridge.example.finalproject.entity.AccountEntity;
import com.bridge.example.finalproject.entity.CharacterEntity;
import com.bridge.example.finalproject.repository.CharacterRepository;
import org.slf4j.Logger;
import com.bridge.example.finalproject.repository.AccountRepository;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private static final Logger log = LoggerFactory.getLogger(AccountService.class);
    private final AccountRepository accountRepository;
    private final CharacterRepository characterRepository;

    public AccountService(AccountRepository accountRepository, CharacterRepository characterRepository) {
        this.accountRepository = accountRepository;
        this.characterRepository = characterRepository;
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

    public CharacterEntity updateCharacterById(Long l, CharacterEntity characterWithUpdates) {
        CharacterEntity characterToEdit = characterRepository.findById(l).orElse(null);
        if(characterToEdit != null) {
            if (characterWithUpdates.getHealth() != null) {characterToEdit.setHealth(characterWithUpdates.getHealth()); }
            if (characterWithUpdates.getMana() != null) {characterToEdit.setMana(characterWithUpdates.getMana()); }
            if (characterWithUpdates.getAttack() != null) {characterToEdit.setAttack(characterWithUpdates.getAttack()); }
            if (characterWithUpdates.getDefense() != null) {characterToEdit.setDefense(characterWithUpdates.getDefense()); }
            if (characterWithUpdates.getStatPoints() != null) {characterToEdit.setStatPoints(characterWithUpdates.getStatPoints()); }
            // Updates done. Return new character
            return characterRepository.save(characterToEdit);
        }

        return null;
    }


}
