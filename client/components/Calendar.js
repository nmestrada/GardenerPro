import React from 'react'
import Table from 'react-bootstrap/Table'
import Task from './Task'
import plantObj from '../../utils.js'

const Calendar = () => {
    const today = new Date(Date.now());
    //const firstDay = today.getDay();
    const firstDay = (new Date(today.getFullYear(), today.getMonth())).getDay();
    function daysInMonth(date) { 
        return 32 - (  new Date(date.getDay(), date.getMonth(), 32).getDate());
    }
    const lastDay = daysInMonth(today);
    console.log(firstDay, lastDay)
    const createCalendar = () => {
        let table = []
        const rows = Math.ceil(lastDay/7);
        let j = 1;
        for (let i = 0; i < rows; i++) {
          let children = [];
          while (j <= lastDay) {
            children.push(<td key={j}>{`${j}`}</td>)
            j++
            if((j-1)%7 === 0 && j > 0){
                break;
            }
          }
          table.push(<tr key={i}>{children}</tr>)
        }
        return table
      }
    
return(
    <Table responsive>
    <thead>
      <tr>
        <th>Sunday</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
        <th>Saturday</th>
      </tr>
    </thead>
    <tbody>
        {createCalendar()}
    </tbody>
  </Table>
  )
}

export default Calendar