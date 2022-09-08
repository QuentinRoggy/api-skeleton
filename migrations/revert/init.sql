-- Revert o-resto:init from pg

BEGIN;

DROP TABLE "manager","cooking_style","city","restaurant","restaurant_has_cooking_style";

DROP DOMAIN "postal_code_fr", "email";

COMMIT;
