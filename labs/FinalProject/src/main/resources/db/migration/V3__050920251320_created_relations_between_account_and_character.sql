ALTER TABLE character_entity
    DROP CONSTRAINT fk_characterentity_on_account;

CREATE TABLE account_entity_characters
(
    account_entity_id BIGINT NOT NULL,
    characters_id     BIGINT NOT NULL
);

ALTER TABLE account_entity_characters
    ADD CONSTRAINT uc_account_entity_characters_characters UNIQUE (characters_id);

ALTER TABLE account_entity_characters
    ADD CONSTRAINT fk_accentcha_on_account_entity FOREIGN KEY (account_entity_id) REFERENCES account_entity (id);

ALTER TABLE account_entity_characters
    ADD CONSTRAINT fk_accentcha_on_character_entity FOREIGN KEY (characters_id) REFERENCES character_entity (id);

ALTER TABLE character_entity
    DROP COLUMN account_id;