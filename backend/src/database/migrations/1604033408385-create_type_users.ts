import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTypeUsers1604033408385 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: "type_user",
				columns: [
					{
						name: "id_type_user",
						type: "integer",
						unsigned: true,
						isPrimary: true,
						isGenerated: true,
						generationStrategy: "increment",
					},
					{
						name: "type_user",
						type: "varchar",
					},
					{
						name: "active",
						type: "boolean",
						default: true,
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("type_user");
	}
}
