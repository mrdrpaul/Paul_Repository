package com.bridge.example.finalproject.service;

import com.bridge.example.finalproject.entity.CharacterEntity;
import com.bridge.example.finalproject.repository.CharacterRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CharacterService {

    private static final Logger log = LoggerFactory.getLogger(CharacterService.class);

    private final CharacterRepository characterRepository;

    public CharacterService(CharacterRepository characterRepository) {
        this.characterRepository = characterRepository;
    }

    public CharacterEntity addNewCharacter(CharacterEntity character){return characterRepository.save(character);}

    public List<CharacterEntity> getCharacters(){return characterRepository.findAll();}
}
