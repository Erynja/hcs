-- Table: pokemon.attacks

DROP TABLE IF EXISTS pokemon.attacks;

CREATE TABLE IF NOT EXISTS pokemon.attacks
(
    attack_id character varying(2) COLLATE pg_catalog."default",
    attack_name character varying(10) COLLATE pg_catalog."default",
    special_id character varying(2) COLLATE pg_catalog."default",
    special_name character varying(10) COLLATE pg_catalog."default"
)

WITH (
    autovacuum_enabled = TRUE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS pokemon.attacks
    OWNER to postgres;