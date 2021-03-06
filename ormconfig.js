require("dotenv/config");

module.exports = [
  {
    name: "production",
    type: "postgres",
    host: "localhost",
    port: 5438,
    username: "postgres",
    password: "postgres",
    database: "production",
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
  },
  {
    name: "development",
    type: "postgres",
    host: "localhost",
    port: 5437,
    username: "postgres",
    password: "postgres",
    database: "development",
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
  },
  {
    name: "test",
    type: "postgres",
    host: "localhost",
    port: 5436,
    username: "postgres",
    password: "postgres",
    database: "test",
    synchronize: true,
    // dropSchema: true,
    entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
    cli: {
      migrationsDir: "./src/shared/infra/typeorm/migrations",
    },
  },
];
