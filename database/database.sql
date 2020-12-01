Create Database ClowseDB;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- INSERT DATA INTO SETTINGS.STAGES

INSERT INTO settings.STAGES(stageID, name,createdBy,dateCreated) VALUES (SELECT uuid_generate_v4(), "Qualify",'071ad17e-f3fe-4f02-b92c-7a7d1fa61654',current_timestamp,);
INSERT INTO settings.STAGES(stageID, name,createdBy,dateCreated) VALUES (SELECT uuid_generate_v4(), "Discovery",'071ad17e-f3fe-4f02-b92c-7a7d1fa61654',current_timestamp,);
INSERT INTO settings.STAGES(stageID, name,createdBy,dateCreated) VALUES (SELECT uuid_generate_v4(), "Demo",'071ad17e-f3fe-4f02-b92c-7a7d1fa61654',current_timestamp,);