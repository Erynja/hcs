CREATE OR REPLACE PROCEDURE digimon.type_processing()
AS $$
DECLARE

  iNumOfRecord							   integer;
  
  -- Dieser Cursor liefert alle Typen
  rec_Type record;
  DECLARE cur_Type CURSOR FOR
   SELECT type_id
         ,type_name
		 
    FROM digimon.types t
   GROUP BY type_id, type_name
   ORDER BY type_id, type_name;

	-- Dieser Cursor liefert alle digimon
  rec_digimon record;
  DECLARE cur_digimon CURSOR FOR
   SELECT  name 
		  ,level		  
          ,type                                              
          ,attack 		  
    FROM digimon.digimon p
	GROUP BY name, level, type, attack
	ORDER BY name;
	
	TRUNCATE digimon.digimon;

BEGIN
			
   -- Öffnen des Cursors über alle Datensätze der Tabelle
   iNumOfRecord := 0;
   
   FOR rec_Type IN cur_Type LOOP	
   iNumOfRecord := iNumOfRecord + 1;

		FOR rec_digimon IN cur_digimon LOOP
		
			 
			 UPDATE digimon.digimon
			 SET type = rec_Type.type_name
			 WHERE digimon.type = rec_Type.type_id;
			
	    END LOOP;
		  
   END LOOP;       -- Ende der äußeren Schleife
 
END;

$$ LANGUAGE plpgsql;

