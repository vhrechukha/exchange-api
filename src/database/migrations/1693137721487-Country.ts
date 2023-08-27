/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Country1693137721487 implements MigrationInterface {
  name = 'Country1693137721487';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exchange"."country" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_8ff4c23dc9a3f3856555bd86186" UNIQUE ("code"), CONSTRAINT "PK_bf6e37c231c4f4ea56dcd887269" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "exchange"."country"`);
  }
}
