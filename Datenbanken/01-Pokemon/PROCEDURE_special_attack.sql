CREATE OR REPLACE PROCEDURE public.special_attack_processing()
AS $$
DECLARE

  iNumOfRecord							   integer;

  cType1                                   public.pokemon.type1%TYPE;
  cType2                                   public.pokemon.type2%TYPE;
  cSpecies                                 public.pokemon.species%TYPE;
  cTypeName                                public.types.type_name%TYPE;
  cTypeID								   public.types.type_id%TYPE;


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
	
	-- Dieser Cursor liefert alle Spezial Attacken
  rec_Special record;
  DECLARE cur_Special CURSOR FOR
   SELECT  id                      
	      ,name                    
	      ,type                    
	      ,effect                 
	      ,accuracy               
	      ,pp                     
	      ,damage_base           
	      ,damage_total                  
    FROM public.special_attacks
	GROUP BY id, name, type, effect, accuracy, pp, damage_base, damage_total
	ORDER BY id, name;	

BEGIN
			
   -- Öffnen des Cursors über alle Datensätze der Tabelle
   iNumOfRecord := 0;
   
	FOR rec_Pokemon IN cur_Pokemon LOOP
	iNumOfRecord := iNumOfRecord + 1;

		FOR rec_Special IN cur_Special LOOP
		 
		 UPDATE public.pokemon
		 SET special_attack = rec_Special.name
		 WHERE special_attack = rec_Special.id;

		END LOOP;
		
	END LOOP; 	         -- Ende der äußeren Schleife
 
END;

$$ LANGUAGE plpgsql;

