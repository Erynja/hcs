CREATE OR REPLACE PROCEDURE public.type_processing()
AS $$
DECLARE

  iNumOfRecord							   integer;
  
  -- Dieser Cursor liefert alle Typen
  rec_Type record;
  DECLARE cur_Type CURSOR FOR
   SELECT type_id
         ,type_name
		 
    FROM public.types t
   GROUP BY type_id, type_name
   ORDER BY type_id, type_name;

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
	
	TRUNCATE public.pokemon;

BEGIN
			
   -- Öffnen des Cursors über alle Datensätze der Tabelle
   iNumOfRecord := 0;
   
   FOR rec_Type IN cur_Type LOOP	
   iNumOfRecord := iNumOfRecord + 1;

		FOR rec_Pokemon IN cur_Pokemon LOOP
	
			 UPDATE public.pokemon
			 SET type2 = rec_Type.type_name
			 WHERE pokemon.type2 = rec_Type.type_id;
			 
			 UPDATE public.pokemon
			 SET type1 = rec_Type.type_name
			 WHERE pokemon.type1 = rec_Type.type_id;
			
	    END LOOP;
		  
   END LOOP;       -- Ende der äußeren Schleife
 
END;

$$ LANGUAGE plpgsql;

