package com.bridge.example.finalproject.controller;

import com.bridge.example.finalproject.entity.AccountEntity;
import com.bridge.example.finalproject.entity.CharacterEntity;
import com.bridge.example.finalproject.service.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService){this.accountService = accountService;}

    @PostMapping("/newUser")
    public ResponseEntity<AccountEntity> addNewAccount(@RequestBody AccountEntity account){
        return ResponseEntity.ok(accountService.addNewAccount(account));
    }

    @GetMapping("/accounts")
    public ResponseEntity<List<AccountEntity>> getAccounts(){return ResponseEntity.ok(accountService.getAccounts());}

    @PostMapping("/newCharacter/{accountId:\\d+}")
    public ResponseEntity<CharacterEntity> addNewCharacter(@RequestBody CharacterEntity character, @PathVariable Long accountId){
        return ResponseEntity.ok(accountService.addNewCharacter(character, accountId));
    }


    @GetMapping("/characters/{accountId:\\d+}")
    public ResponseEntity<List<CharacterEntity>> getCharacters(@PathVariable Long accountId){return ResponseEntity.ok(accountService.getCharacters(accountId));}

}
