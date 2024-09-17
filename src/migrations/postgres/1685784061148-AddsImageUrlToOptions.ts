import {MigrationInterface, QueryRunner} from "typeorm";

export class AddsImageUrlToOptions1685784061148 implements MigrationInterface {
    name = 'AddsImageUrlToOptions1685784061148'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form_field_option" ADD "imageUrl" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "form_field_option" DROP COLUMN "imageUrl"`);
    }

}
