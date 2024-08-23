-- Table: pokemon.special_attacks

DROP TABLE IF EXISTS pokemon.special_attacks;

CREATE TABLE IF NOT EXISTS pokemon.special_attacks
(
    id                     character varying (2)       COLLATE pg_catalog."default",
	name                   character varying (15)      COLLATE pg_catalog."default",
	type                   character varying (15)      COLLATE pg_catalog."default",
	effect                 character varying(120)      COLLATE pg_catalog."default",
	accuracy               integer                                                 ,
	pp                     integer                                                 ,  -- power points
	damage_base            integer                                                 ,
	damage_total           integer                                                       
	/*The Power of a move is the base damage that a move does. 
	It is added to the Attack or Special attack stat, 
	and that is subtracted by the opponent's Defense or Special Defense, 
	resulting in the amount of damage done to the opponent.
	*/
)

WITH (
    autovacuum_enabled = TRUE
)
TABLESPACE pg_default;