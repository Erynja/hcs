TRUNCATE pokemon.types;

COPY pokemon.types
(   type_id
   ,type_name
) FROM 'C:/TEMP/import/types.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';