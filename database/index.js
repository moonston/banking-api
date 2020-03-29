const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const db = {};

console.log("DATABASE_HOST", dbConfig.DATABASE_HOST)
console.log("DATABASE_NAME", dbConfig.DATABASE_NAME)
console.log("DATABASE_USER", dbConfig.DATABASE_USER)
console.log("DATABASE_PASSWORD", dbConfig.DATABASE_PASSWORD)

sequelize = new Sequelize(
    dbConfig.DATABASE_NAME,
    dbConfig.DATABASE_USER,
    dbConfig.DATABASE_PASSWORD, {
        host: dbConfig.DATABASE_HOST,
        port: dbConfig.DATABASE_PORT,
        dialect: 'postgres',
        dialectOption: {
            ssl: true,
            native: true
        }
    }
);

/**
 * Making connection
 */
sequelize
    .authenticate()
    .then(() => {
        sequelize.sync();
        console.log('Connection has been established successfully to ' + dbConfig.DATABASE_NAME);
        return null;
    })
    .catch(err => {
        console.error('Unable to connect to the ' + dbConfig.DATABASE_NAME+':', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = {
    db: db,
};