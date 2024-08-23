CREATE OR REPLACE PROCEDURE public.species_processing()
AS $$
DECLARE
	-- Dieser Cursor liefert alle Pokemon
  rec_Pokemon record;
  DECLARE cur_Pokemon CURSOR FOR
   SELECT  no                    
          ,name                  
          ,type1                 
          ,type2                 
          ,species               
          ,height              
          ,weight               
          ,special_attack        
    FROM public.pokemon p
	GROUP BY no, name, type1, type2, species, height, weight, special_attack
	ORDER BY no, name;
	
	     -- Dieser Cursor liefert alle Spezies
  rec_Species record;
  DECLARE cur_Species CURSOR FOR
   SELECT species_id
		 ,species_name
    FROM public.species s
   GROUP BY species_id, species_name
   ORDER BY species_id, species_name;

BEGIN

	FOR rec_Pokemon IN cur_Pokemon LOOP
	
		FOR rec_Species IN cur_Species LOOP

		 UPDATE public.pokemon
		 SET species = rec_Species.species_name
		 WHERE pokemon.species = rec_Species.species_id;
	
		END LOOP;
		  
   END LOOP;       -- Ende der äußeren Schleife
 
END;

$$ LANGUAGE plpgsql;

