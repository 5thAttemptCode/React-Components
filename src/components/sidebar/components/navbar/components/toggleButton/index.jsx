import React from 'react'
import { useSidebar } from '../../../../customHooks/useSidebar'


export default function ToggleButton({ className, children }) {

  const { toggleSidebar } = useSidebar()

  return (
    <button onClick={toggleSidebar} className={className}>
      {children}
    </button>
  )
}
