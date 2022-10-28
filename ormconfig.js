module.exports = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'devtraining',
    entities: ['dist/**/*.model.js'],
    migrations: ['dist/migrations/*.js'],
    cli: {
        migrationsDir: 'src/migrations'
    }
}