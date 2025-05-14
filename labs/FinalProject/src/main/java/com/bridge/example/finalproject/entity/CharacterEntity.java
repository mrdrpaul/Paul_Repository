package com.bridge.example.finalproject.entity;

import jakarta.persistence.*;

@Entity
public class CharacterEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String characterName;
    private String characterClass;
    private Integer health;
    private Integer mana;
    private Integer attack;
    private Integer defense;
    private Integer level;
    private Integer statPoints;

    public CharacterEntity(){

    }
    public CharacterEntity(String characterName, String characterClass, Integer health, Integer mana, Integer attack, Integer defense, Integer statPoints) {
        this.characterName = characterName;
        this.characterClass = characterClass;
        this.health = health;
        this.mana = mana;
        this.attack = attack;
        this.defense = defense;
        this.statPoints = statPoints;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCharacterName() {
        return characterName;
    }

    public void setCharacterName(String characterName) {
        this.characterName = characterName;
    }

    public String getCharacterClass() {
        return characterClass;
    }

    public void setCharacterClass(String characterClass) {
        this.characterClass = characterClass;
    }

    public Integer getHealth() {
        return health;
    }

    public void setHealth(Integer health) {
        this.health = health;
    }

    public Integer getMana() {
        return mana;
    }

    public void setMana(Integer mana) {
        this.mana = mana;
    }

    public Integer getAttack() {
        return attack;
    }

    public void setAttack(Integer attack) {
        this.attack = attack;
    }

    public Integer getDefense() {
        return defense;
    }

    public void setDefense(Integer defense) {
        this.defense = defense;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getStatPoints() {
        return statPoints;
    }

    public void setStatPoints(Integer statPoints) {
        this.statPoints = statPoints;
    }
}
