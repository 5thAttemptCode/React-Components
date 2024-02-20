import React, { useState, useEffect } from 'react'


//Custom Hook
const useDateTime = (timeZone) => {
  const [date, setDate] = useState(new Date().toLocaleString("en-US", {timeZone: timeZone}))

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleString("en-US", {timeZone: timeZone}))
    }, 1000)

    //This is used to update the time in your state variables time, nyTime, and melbTime every second.
    return () => clearInterval(timer)
  }, [timeZone])

  return date
}

const TimeDisplay = ({timeZone, children}) => {
  const date = useDateTime(timeZone)
  return (
    <p>{children}: {date}</p>
  )
}


export default function App() {
  return (
    <div>
      <TimeDisplay timeZone="GMT">Current date and time</TimeDisplay>
      <TimeDisplay timeZone="America/New_York">New York date and time</TimeDisplay>
      <TimeDisplay timeZone="Australia/Melbourne">Melbourne date and time</TimeDisplay>
      <TimeDisplay timeZone="Asia/Kuala_Lumpur">Melbourne date and time</TimeDisplay>
    </div>
  )
}
