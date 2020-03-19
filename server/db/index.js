//We'll make the relations in this file
const Plant = require('./plant')
const User = require('./user')

User.belongsToMany(Plant, {through: 'user-plants'})
Plant.belongsToMany(User, {through: 'user-plants'})

module.exports = {
    Plant,
    User
}

