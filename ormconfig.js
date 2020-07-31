module.exports = {
  "name": "default",
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  // "ssl": true,
  // "extra": {
  //   "ssl":  {
  //     rejectUnauthorized: false,
  //   },
  // },
  "entities": [
    process.env.DATABASE_ENTITIES
  ],
  "migrations": [
    process.env.DATABASE_MIGRATIONS
  ],
  "cli": {
    "migrationsDir": process.env.DATABASE_MIGRATIONS_DIR
  }
};
