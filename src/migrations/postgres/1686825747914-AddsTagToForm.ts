import {MigrationInterface, QueryRunner} from "typeorm";

export class AddsTagToForm1686825747914 implements MigrationInterface {
    name = 'AddsTagToForm1686825747914'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form" ADD "tag" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form" DROP COLUMN "tag"`);
    }
}
