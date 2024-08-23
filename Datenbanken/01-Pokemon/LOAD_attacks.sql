TRUNCATE pokemon.attacks;

COPY pokemon.attacks
(   attack_id
   ,attack_name
   ,special_id
   ,special_name
) FROM 'C:/TEMP/import/attacks.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';