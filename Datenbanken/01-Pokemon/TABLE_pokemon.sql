-- Table for Pokemon

DROP TABLE IF EXISTS pokemon.pokemon;
CREATE TABLE pokemon.pokemon
(
    no                   character varying  (3)        NOT NULL
   ,name                 character varying (30)        NOT NULL
   ,type1                character varying (15)        
   ,type2                character varying (15)        
   ,species              character varying (30)        
   ,height               numeric          (10,2)        
   ,weight               numeric          (10,2)        
   ,special_attack       character varying (30)        
)WITH ( autovacuum_enabled = TRUE )
    TABLESPACE pg_default;