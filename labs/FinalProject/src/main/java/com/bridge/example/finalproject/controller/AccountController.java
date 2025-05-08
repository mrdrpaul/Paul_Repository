package com.bridge.example.finalproject.controller;

import com.bridge.example.finalproject.entity.AccountEntity;
import com.bridge.example.finalproject.service.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
}
