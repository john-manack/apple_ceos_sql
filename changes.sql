-- Updates a misspelling in a row by ID; it would also work to reference by another column besides ID
UPDATE apple_ceos SET name = 'Steve Jobs' WHERE id = 15;
-- Deletes a row by ID
DELETE FROM apple_ceos WHERE id = 17;