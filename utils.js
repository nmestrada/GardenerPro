/*
We do not water our plants on a weekend. Work-life balance is important, and we shouldn't be in the office on a weekend.
Our plants are reasonably tolerant and will still be happy if they are watered a day before or after the day they should be watered.
Watering an individual plant takes no time at all so you don't have to worry about how many plants can be watered in a particular day.
The scheduling should start from next Monday and last for 12 weeks.
All plants will be watered on the first day of the schedule (next Monday).
 */
const data = require('./plantData.json')

const parseData = array => {
    array.forEach(plant => {
        plant.day = +(plant.water_after)
    })
    return array;
}

const plantObj = parseData(data);
console.log(plantObj)

class PlantsScheduler {
    constructor(plantData){
        this.plants = plantData;
    }
    waterToday() {
        return false
    }
}
module.exports = plantObj;
