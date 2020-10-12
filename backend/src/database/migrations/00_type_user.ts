import Knex from 'knex';

export async function up(knex: Knex){
	return knex.schema.createTable('type_user', table => {
		table.increments('id_type_user').primary();
		table.json('type_user').notNullable();
		table.boolean('active').defaultTo(true);
	});
}
export async function down(knex: Knex){
	return knex.schema.dropTable('type_user');	
}