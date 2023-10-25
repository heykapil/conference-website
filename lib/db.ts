import { Kysely } from "kysely";
import { PlanetScaleDialect } from "kysely-planetscale";
import { DB } from "@/types/db-types";

export const queryBuilder = new Kysely<DB>({
  dialect: new PlanetScaleDialect({
    // @ts-ignore
    url: process.env.DATABASE_URL,
  }),
});
