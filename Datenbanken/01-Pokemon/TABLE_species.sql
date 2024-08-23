-- Table: pokemon.species

DROP TABLE IF EXISTS pokemon.species;

CREATE TABLE IF NOT EXISTS pokemon.species
(
	species_id character varying(2) COLLATE pg_catalog."default",
	species_name character varying(30) COLLATE pg_catalog."default" 
)

WITH (
    autovacuum_enabled = TRUE
)
TABLESPACE pg_default;