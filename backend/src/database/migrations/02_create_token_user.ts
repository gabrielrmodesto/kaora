import Knex from "knex";

export async function up(knex: Knex) {
	return knex.schema.createTable("token_user", (table) => {
		table.increments("id_token_user").primary();
		table.string("token_user").notNullable();
		table.boolean("active").defaultTo(true);
		table.dateTime("expired_at").notNullable();
		table
			.integer("user_id_user")
			.notNullable()
			.references("id_user")
			.inTable("user");
	});
}
export async function down(knex: Knex) {
	return knex.schema.dropTable("token_user");
}
