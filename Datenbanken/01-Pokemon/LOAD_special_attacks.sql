TRUNCATE public.special_attacks;

COPY public.special_attacks
(   id                     
   ,name                   
   ,type                   
   ,effect                 
   ,accuracy               
   ,pp                     
   ,damage_base          
   ,damage_total
) FROM 'C:/TEMP/import/special_attacks.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';