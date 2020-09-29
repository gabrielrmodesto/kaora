import Knex from "knex";

export async function up(knex: Knex) {
	return knex.schema.createTable("annotation", (table) => {
		table.increments("id_annotation").primary();
		table.text("annotation").notNullable();
		table
			.integer("user_id_user")
			.notNullable()
			.references("id_user")
			.inTable("user");
		table
			.integer("muscle_assessment_id_muscle_assessment")
			.nullable()
			.references("id_muscle_assessment")
			.inTable("muscle_assessment");
	});
}
export async function down(knex: Knex) {
	return knex.schema.dropTable("annotation");
}
