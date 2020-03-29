'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.js')[env];
const dbConfig = require('../config/db.config')[env];
const db = {};


// console.log('env', env);
// console.log('db', require('../config/db.config'));
// console.log('dbConfig 222222', dbConfig);
// console.log('process.env.DATABASE_HOST ', process.env.DATABASE_HOST);
// console.log('dbConfig.host ', dbConfig.host);

let sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password, {
      host: dbConfig.host,
      port: dbConfig.port,
      dialect: 'postgres',
      dialectOption: {
        ssl: true,
        native: true
      }
    }
);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
