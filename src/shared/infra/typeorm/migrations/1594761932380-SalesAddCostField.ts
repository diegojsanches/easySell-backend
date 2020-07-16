import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class SalesAddCostField1594761932380
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'cost',
        type: 'decimal',
        default: 0,
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('sales', 'cost');
  }
}
