package com.bridge.example.finalproject.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class AccountEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;

    @OneToMany(cascade = CascadeType.ALL)
    private List<CharacterEntity> characters;

    public AccountEntity(){
    }

    public AccountEntity(String username, String password, List<CharacterEntity> characters) {
        this.username = username;
        this.password = password;
        this.characters = characters;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<CharacterEntity> getCharacters() {
        return characters;
    }

    public void setCharacters(List<CharacterEntity> characters) {
        this.characters = characters;
    }
}
