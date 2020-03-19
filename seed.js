const db = require('./server/db/database')
const {Plants} = require('./server/db/index.js')
const plants = require('./plantData.json')

const seedData = async () => {
    try{
        //force true drops tables if they exist, thus rewriting everything you did to the db before
        await db.sync({force: true})
        console.log('were here')
        //add plants here
        await Promise.all(plants.map(plant => Plants.create(plant)))
        //add users here

        //add some example user plant magic methods  here
        

        console.log('done seeding!')
    }catch(err){
        console.log(err.message)
    }
}

seedData();
