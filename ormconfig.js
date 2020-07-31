module.exports = {
  "name": "default",
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "ssl": true,
  "extra": {
    "ssl":  {
      rejectUnauthorized: false,
    },
  },
  "entities": [
    "./dist/modules/**/infra/typeorm/entities/*.js"
  ],
  "migrations": [
    "./dist/shared/infra/typeorm/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./dist/shared/infra/typeorm/migrations"
  }
};
