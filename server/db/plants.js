const Sequelize = require('sequelize');
const db = require('./database')


const Plants = db.define('plants', {
    name:{
        type: Sequelize.STRING,
        allowNUll: false
    },
    //this will be in days
    water_after: {
        type: Sequelize.INTEGER,
        allowNUll: false
    },
    //this will be in hours
    sunlight: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'indirect'
    },
    //string type of soil
    soil: {
        type: Sequelize.ENUM('regular', 'cactus', 'woodChips'),
        defaultValue: "regular"
    }
    
});

module.exports = Plants;