import Knex from 'knex';

export async function up(knex: Knex){
	return knex.schema.createTable('muscle_data', table => {
		table.increments('id_muscle_data').primary();
		table.json('muscle_data').notNullable();
		table.boolean('active').defaultTo(true);
		table.integer('muscle_assessment_id_muscle_assessment').notNullable().references('id_muscle_assessment').inTable('muscle_assessment');
	});
}
export async function down(knex: Knex){
	return knex.schema.dropTable('muscle_data');	
}