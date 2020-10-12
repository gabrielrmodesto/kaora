import Knex from "knex";

export async function up(knex: Knex) {
	return knex.schema.createTable("refresh_token", (table) => {
		table.increments("id_refresh_token").primary();
		table.string("refresh_token").notNullable();
		table.boolean("active").defaultTo(true);
		table
			.integer("token_user_id_token_user")
			.notNullable()
			.references("id_token_user")
			.inTable("token_user");
	});
}
export async function down(knex: Knex) {
	return knex.schema.dropTable("refresh_token");
}
