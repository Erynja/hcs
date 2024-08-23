TRUNCATE pokemon.pokemon;
COPY pokemon.pokemon
(   no  
   ,name  
   ,type1  
   ,type2  
   ,species  
   ,height  
   ,weight  
   ,special_attack  
) FROM 'C:/TEMP/import/pokemon.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';