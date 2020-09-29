import knex from 'knex';

// TODO criar env para conexao
const connection = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		database: 'kaora',
		user: 'gabrielmodesto',
		password: '1p3p4S5$'
	}
});

export default connection;