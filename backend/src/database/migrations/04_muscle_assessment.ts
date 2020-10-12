import Knex from 'knex';

export async function up(knex: Knex){
	return knex.schema.createTable('muscle_assessment', table => {
		table.increments('id_muscle_assessment').notNullable();
		table.text('muscle_assessment').notNullable();
		table.string('part_body').notNullable();
		table.boolean('active').defaultTo(true);
	});
}
export async function down(knex: Knex){
	return knex.schema.dropTable('muscle_assessment');	
}