INTRO TO SQL

1. Explain persistence and the need for using SQL

2. Define SQL

3. Explain the difference between SQLite3 and SQL

4. Explore provided data through SQLite Browser

5. Perform CRUD actions on a single table

6. Perform CRUD actions across related tables


SQL Statements to write

1. Write the SQL to return all of the rows in the artists tables

2. Write the SQL to select the artist with the name "Black Sabbath"

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

4. Write the SQL to alter the fans table to have an artistId column of type integer

5. Write the SQL to add yourself as a fan of the Black Eyed Peas (artistId = 169) INSERT INTO fans (name, artistId) VALUES ("Your name", 169)

6. Return fans that are not fans of the Black Eyed Peas (artistId = 169) SELECT * FROM fans WHERE artistId IS NOT 169

7. Return artists name next to their album title
