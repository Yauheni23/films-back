'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const modelsPath = path.join(__dirname, 'models');
const db = {};

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}&ssl=true`;

const sequelize = new Sequelize(URL);

sequelize.authenticate()
  .then(() => console.log('Connection to the DB has been established successfully'))
  .catch(err => console.error('Unable to connect to the DB: ', err));

fs
  .readdirSync(modelsPath)
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach(file => {
    const model = sequelize['import'](path.join(modelsPath, file));
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
