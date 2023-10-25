import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export type registration = {
    id: Generated<number>;
    date: Generated<Timestamp>;
    name: string;
    email: string;
    phone: string;
    address: string;
    affiliation: string;
    university: string;
    tranXno: string;
    tranXdate: Timestamp;
    tranXproof: string;
    paper: string;
};
export type DB = {
    registration: registration;
};
