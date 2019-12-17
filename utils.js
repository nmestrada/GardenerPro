const data = require('./Apprentice_WeGrowInTandem_Data.json')

const parseData = array => {
    let obj = {}
    array.forEach(plant => {
        obj[plant.name] = +(plant.water_after.replace(/\D/g,''))
    })
    return obj;
}

const plantObj = parseData(data);