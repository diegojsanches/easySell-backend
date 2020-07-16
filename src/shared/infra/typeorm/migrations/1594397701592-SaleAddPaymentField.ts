import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class SaleAddPaymentField1594397701592
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'sales',
      new TableColumn({
        name: 'payment',
        type: 'decimal',
        default: 0,
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('sales', 'payment');
  }
}
