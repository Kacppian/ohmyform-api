import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddsNewFieldsToField1685716802734 implements MigrationInterface {
  name = 'AddsNewFieldsToField1685716802734';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "form_field" ADD "imageUrl" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "form_field" ADD "ctaText" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "form_field" DROP COLUMN "ctaText"`);
    await queryRunner.query(`ALTER TABLE "form_field" DROP COLUMN "imageUrl"`);
  }
}
