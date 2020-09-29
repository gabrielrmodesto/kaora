import Knex from "knex";

export async function up(knex: Knex) {
	return knex.schema.createTable("user", (table) => {
		table.increments("id_user").primary();
		table.string("name_user").notNullable();
		table.string("login").notNullable();
		table.string("password").notNullable();
		table
			.integer("type_user_id_type_user")
			.notNullable()
			.references("id_type_user")
			.inTable("type_user");
		table.boolean('active').defaultTo(true);
	});
}
export async function down(knex: Knex) {
	return knex.schema.dropTable("user");
}
