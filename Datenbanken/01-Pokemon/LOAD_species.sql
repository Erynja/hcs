TRUNCATE public.species;

COPY public.species
(   species_id
   ,species_name
) FROM 'C:/TEMP/import/species.csv' DELIMITER ';' CSV HEADER ENCODING 'UTF8' QUOTE E'"' ESCAPE '''';