import React, { useState } from 'react'
import {getCurrentDate, getTime} from "./GetDate"

const Date = () => {

  const [time, setTime] = useState(getTime()); 
  const [date, setDate] = useState(getCurrentDate()); 
  const [timeColor, setTimeColor] = useState(true);

  setTimeout(()=> {
    setTime(getTime())
    setTimeColor(!timeColor)
  }, 1000); 

  setTimeout(()=> setDate(getCurrentDate()), 60000);
    
  return (
    <div>
        <h1>Welcome to React App</h1>
        <p>Date is {date} and the Time is <span style={{backgroundColor : timeColor ? "yellow" : "red"}}>{time}</span></p>
        <hr />
    </div>
  )
}

export default Date