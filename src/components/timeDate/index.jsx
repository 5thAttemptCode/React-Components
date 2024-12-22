import React from 'react'
import TimeDisplay from './components'


export default function TimeDate() {

  return (
    <section>
      <TimeDisplay timeZone="Pacific/Apia">Local date and time</TimeDisplay>
      <TimeDisplay timeZone="America/New_York">New York date and time</TimeDisplay>
      <TimeDisplay timeZone="Australia/Melbourne">Melbourne date and time</TimeDisplay>
      <TimeDisplay timeZone="Asia/Kuala_Lumpur">Kuala Lumpur date and time</TimeDisplay>
    </section>
  )
}

