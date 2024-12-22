import { useState, useEffect } from 'react'


const useDateTime = (timeZone) => {
    
  const [ date, setDate ] = useState(new Date().toLocaleString("en-US", {timeZone: timeZone}))

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date().toLocaleString("en-US", {timeZone: timeZone}))
    }, 1000)

    //This is used to update the time in your state variables time, nyTime, and melbTime every second.
    return () => clearInterval(timer)
  }, [ timeZone ])

  return date
}

export default useDateTime