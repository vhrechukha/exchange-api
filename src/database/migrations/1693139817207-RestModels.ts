/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

export class RestModels1693139817207 implements MigrationInterface {
  name = 'RestModels1693139817207';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exchange"."rate" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "from" character varying NOT NULL, "to" character varying NOT NULL, "in" double precision NOT NULL, "out" double precision NOT NULL, "reserve" double precision NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "exchangeOfficeId" character varying, CONSTRAINT "PK_2618d0d38af322d152ccc328f33" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "exchange"."exchange_office" ("id" character varying NOT NULL, "name" character varying NOT NULL, "countryId" uuid, CONSTRAINT "PK_47f1803a836a8d8aac3f0b3f248" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "exchange"."exchange" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "from" character varying NOT NULL, "to" character varying NOT NULL, "ask" double precision NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "exchangeOfficeId" character varying, CONSTRAINT "PK_cbd4568fcb476b57cebd8239895" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "exchange"."rate" ADD CONSTRAINT "FK_5ae74394e00494a7802c443114f" FOREIGN KEY ("exchangeOfficeId") REFERENCES "exchange"."exchange_office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exchange"."exchange_office" ADD CONSTRAINT "FK_15ab842dc46594a5b3b4f637619" FOREIGN KEY ("countryId") REFERENCES "exchange"."country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "exchange"."exchange" ADD CONSTRAINT "FK_89e4c3a83664ddd372da45287c5" FOREIGN KEY ("exchangeOfficeId") REFERENCES "exchange"."exchange_office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "exchange"."exchange" DROP CONSTRAINT "FK_89e4c3a83664ddd372da45287c5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exchange"."exchange_office" DROP CONSTRAINT "FK_15ab842dc46594a5b3b4f637619"`,
    );
    await queryRunner.query(
      `ALTER TABLE "exchange"."rate" DROP CONSTRAINT "FK_5ae74394e00494a7802c443114f"`,
    );
    await queryRunner.query(`DROP TABLE "exchange"."exchange"`);
    await queryRunner.query(`DROP TABLE "exchange"."exchange_office"`);
    await queryRunner.query(`DROP TABLE "exchange"."rate"`);
  }
}
