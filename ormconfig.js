require("dotenv/config");

const database = {
  production: "postgres",
  test: "tests",
};
module.exports = [
  {
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5438,
    username: "postgres",
    password: "postgres",
    database: database[process.env.APP_DEBUG],
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
  },
];
