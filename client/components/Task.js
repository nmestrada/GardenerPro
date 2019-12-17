import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Task = (props) => (
    <ListGroup >
        {props.plants.map(plant => <ListGroup.Item variant="success" key={plant.name}>{plant.name}</ListGroup.Item>)}
    </ListGroup>
)

export default Task;