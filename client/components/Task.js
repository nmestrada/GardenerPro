import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

const Task = (props) => (
    <ListGroup.Item variant="success">
        {props.string}
    </ListGroup.Item>
)

export default Task;