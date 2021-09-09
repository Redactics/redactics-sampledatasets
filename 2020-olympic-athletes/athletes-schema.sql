CREATE SEQUENCE IF NOT EXISTS athletes_id_seq;

CREATE TABLE "public"."athletes" (
    "id" int4 NOT NULL DEFAULT nextval('athletes_id_seq'::regclass),
    "name" varchar,
    "noc" varchar,
    "discipline" varchar,
    "email" varchar,
    PRIMARY KEY ("id")
);

