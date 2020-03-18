import React from 'react'
const plants = require('../../plantData.json')

//query data with GraphQl
//probably create a separate component for plant 
const UserPlants = () => {
    return (
        <div>
            {plants.map(plant => <div key={plant.name}>{plant.name}</div>)}
        </div>

    )
}

export default UserPlants