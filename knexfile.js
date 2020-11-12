// Update with your config settings.

module.exports = {

  testing: {
    client: 'sqlite3',
    useNullAsDefualt: true,
    connection: {
      filename: './dev.sqlite3'
    },
    pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			},
  }},

  development: {
    client: 'sqlite3',
    useNullAsDefualt: true,
    connection: {
      filename: './dev.sqlite3'
    },
    pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			},
  }},

  staging: {
    client: 'postgresql',
    useNullAsDefualt: true,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    useNullAsDefualt: true,
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
			afterCreate: (conn, done) => {
				conn.run("PRAGMA foreign_keys = ON", done);
			},
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

}};
