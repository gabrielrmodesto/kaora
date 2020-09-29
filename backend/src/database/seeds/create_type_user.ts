import Knex from 'knex';

export async function seed(knex: Knex){
	await knex("type_user").insert([
		{
			type_user: 'Fisioterapeuta',
			active: true,
		},
		{
			type_user: 'Paciente',
			active: true,
		}
	])
}