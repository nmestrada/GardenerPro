//We'll make the relations in this file
const Plants = require('./plants')
const Users = require('./users')

Users.hasMany(Plants, {through: 'user-plants'})
Plants.belongsToMany(Users, {through: 'user-plants'})

module.exports = {
    Plants,
    Users
}

