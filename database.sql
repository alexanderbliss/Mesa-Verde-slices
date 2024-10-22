DROP TABLE IF EXISTS "bikes";


CREATE TABLE "bikes" (
  "id" SERIAL PRIMARY KEY,
  "manufacturer" VARCHAR(100) NOT NULL,
  "model" VARCHAR(100) NOT NULL
);


INSERT INTO "bikes"
  ("manufacturer", "model")
  VALUES
  ('Surly', 'Steamroller'),
  ('Gitane', 'Tour de France'),
  ('Specialized', 'Stumpjumper'),
  ('Bianchi', 'Specialissima'),
  ('All-City', 'Nature Cross'),
  ('Canyon', 'Grail'),
  ('Eddy Merckx', 'Corsa Extra');
