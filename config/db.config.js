const { parsed } = require('dotenv').config();
// console.log("parsed", parsed)
module.exports = {
    // DATABASE_HOST: process.env.DATABASE_HOST ? process.env.DATABASE_HOST : parsed.DATABASE_HOST,
    // DATABASE_NAME: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : parsed.DATABASE_NAME,
    // DATABASE_USER: process.env.DATABASE_USER ? process.env.DATABASE_USER : parsed.DATABASE_USER,
    // DATABASE_PASSWORD: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : parsed.DATABASE_PASSWORD,
    // DATABASE_PORT: process.env.DATABASE_PORT ? process.env.DATABASE_PORT : parsed.DATABASE_PORT,
    // username: process.env.DATABASE_USER ? process.env.DATABASE_USER : parsed.DATABASE_USER,
    // password: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : parsed.DATABASE_PASSWORD,
    // database: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : parsed.DATABASE_NAME,
    // host:  process.env.DATABASE_HOST ? process.env.DATABASE_HOST : parsed.DATABASE_HOST,
    // dialect: 'postgres',
    [process.env.NODE_ENV || 'dev']: {
        username: process.env.DATABASE_USER ? process.env.DATABASE_USER : parsed.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : parsed.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME ? process.env.DATABASE_NAME : parsed.DATABASE_NAME,
        host: process.env.DATABASE_HOST_DOCKER ? process.env.DATABASE_HOST_DOCKER : 'localhost',
        port: process.env.DATABASE_PORT ? process.env.DATABASE_PORT : parsed.DATABASE_PORT,
        dialect: 'postgres'
    }
};

/// npx sequelize-cli db:migrate  --config ./config/db.config.js
// npx sequelize db:migrate
// npx sequelize init:models


// node_modules/.bin/sequelize model:create --name Card --attributes currency:string
// node_modules/.bin/sequelize model:generate --name Wallet --attributes id:integer,currency:string,balance:float,company_id:integer,is_master:boolean,created_at:date,updated_at:date

// node_modules/.bin/sequelize migration:generate --name update-wallet
// node_modules/.bin/sequelize migration:create --name "fix area of studies"
// node_modules/.bin/sequelize migration:create --name "create-card"