-- Table: pokemon.types

DROP TABLE IF EXISTS pokemon.types;

CREATE TABLE IF NOT EXISTS pokemon.types
(
    type_id character varying(2) COLLATE pg_catalog."default" NOT NULL,
    type_name character varying(10) COLLATE pg_catalog."default" NOT NULL
)

WITH (
    autovacuum_enabled = TRUE
)
TABLESPACE pg_default;