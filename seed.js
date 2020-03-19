const db = require('./server/db/database')
const {Plant, User} = require('./server/db/index')
const plants = require('./plantData.json')
const users = require('./userData')
const seedData = async () => {
    try{
        //force true drops tables if they exist, thus rewriting everything you did to the db before
        await db.sync({force: true})
        //add plants here
        const plantRows = await Promise.all(plants.map(plant => Plant.create(plant)))
        //add users here
        const userRows = await Promise.all(users.map(user => User.create(user)))
        //add some example user plant magic methods  here
        //add more later
        plantRows[0].addUser(userRows[0])
        
        console.log('done seeding!')
    }catch(err){
        console.log(err.message)
    }
}

seedData();
