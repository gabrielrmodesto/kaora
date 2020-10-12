import knex from 'knex';

// TODO criar env para conexao
const connection = knex({
	client: 'mysql',
	connection: {
		host: process.env.DATABASE_HOST,
		database: process.env.DATABASE_NAME,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD
	}
});

export default connection;