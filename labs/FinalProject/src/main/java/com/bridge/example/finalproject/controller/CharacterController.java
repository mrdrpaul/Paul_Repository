package com.bridge.example.finalproject.controller;

import com.bridge.example.finalproject.entity.CharacterEntity;
import com.bridge.example.finalproject.service.AccountService;
import com.bridge.example.finalproject.service.CharacterService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CharacterController {

    private final CharacterService characterService;

    public CharacterController(CharacterService characterService, AccountService accountService) {
        this.characterService = characterService;
    }





}
