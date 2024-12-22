import React from 'react'
import useDateTime from '../customHook'



export default function TimeDisplay({timeZone, children}) {

    const date = useDateTime(timeZone)

    return (
      <p>{children}: {date}</p>
    )
}
