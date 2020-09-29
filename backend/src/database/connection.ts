import knex from 'knex';

// TODO criar env para conexao
const connection = knex({
	client: 'mysql',
	connection: {
		host: '127.0.0.1',
		database: 'kaora',
		user: '',
		password: ''
	}
});

export default connection;