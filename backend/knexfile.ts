import path from "path";

// TODO connection export clien
module.exports = {
	client: "mysql",
	connection: {
		filename: path.resolve(__dirname, "src", "database", "kaora.sql"),
	},
	migrations: {
		directory: path.resolve(__dirname, "src", "database", "migrations"),
	},
	seeds: {
		directory: path.resolve(__dirname, "src", "database", "seeds"),
	},
	useNullAsDefault: true
}