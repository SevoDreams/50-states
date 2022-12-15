module.exports = {
  development: {
    storage: "states.db",
    dialect: "sqlite",
  },
  production: {
    username: "maurice",
    password: process.env.DB_PASSWORD,
    database: "fifty-states-visited-database",
    host: "fifty-states-visited-database-server-maurice.database.windows.net",
    dialect: "mssql",
  },
};
