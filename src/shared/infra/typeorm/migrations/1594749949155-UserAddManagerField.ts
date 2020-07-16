import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class UserAddManagerField1594749949155
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'manager',
        type: 'bool',
        default: false,
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'manager');
  }
}
