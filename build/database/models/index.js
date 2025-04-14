'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../sequelize.config.js')[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
    // Required by Heroku - 'production' DB
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
    console.log("checkpoint 01");
    sequelize
        .authenticate()
        .then(() => {
        console.log('Connection has been established successfully.');
        console.log("checkpoint 02");
    })
        .catch(err => {
        console.error('Unable to connect to the database:', err);
        console.log("checkpoint 03");
    });
    console.log("checkpoint 04");
    //END- Heroku Required Block
}
else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs
    .readdirSync(__dirname)
    .filter(file => {
    return (file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js' &&
        file.indexOf('.test.js') === -1);
})
    .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
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
