
CREATE SEQUENCE IF NOT EXISTS marketing_campaign_id_seq;

CREATE TABLE "public"."marketing_campaign" (
    "id" int4 NOT NULL DEFAULT nextval('marketing_campaign_id_seq'::regclass),
    "first_name" varchar,
    "last_name" varchar,
    "email" varchar,
    "phone" varchar,
    "last_login_ip" varchar,
    "year_birth" int2,
    "education" varchar,
    "marital_status" varchar,
    "income" float4,
    "kidhome" int2,
    "teenhome" int2,
    "dt_customer" varchar,
    "recency" int2,
    "mntwines" float4,
    "mntfruits" float4,
    "mntmeatproducts" float4,
    "mntfishproducts" float4,
    "mntsweetproducts" float4,
    "mntgoldprods" float4,
    "numdealspurchases" int2,
    "numwebpurchases" int2,
    "numcatalogpurchases" int2,
    "numstorepurchases" int2,
    "numwebvisitsmonth" int2,
    "acceptedcmp1" int2,
    "acceptedcmp2" int2,
    "acceptedcmp3" int2,
    "acceptedcmp4" int2,
    "acceptedcmp5" int2,
    "complain" int2,
    "z_costcontact" int2,
    "z_revenue" int2,
    "response" int2,
    PRIMARY KEY ("id")
);
