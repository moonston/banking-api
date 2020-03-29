const { parsed } = require('dotenv').config();
module.exports = {
    [process.env.NODE_ENV || 'dev']: {
        username: process.env.DATABASE_USER ? process.env.DATABASE_USER : parsed.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : parsed.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : parsed.DATABASE_NAME,
        host: process.env.DATABASE_HOST_DOCKER ? process.env.DATABASE_HOST_DOCKER : 'localhost',
        port: process.env.DATABASE_PORT ? process.env.DATABASE_PORT : parsed.DATABASE_PORT,
        dialect: 'postgres'
    }
};
