import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'


export default function App() {

  const [ dropdown, setDropDown ] = useState(false)

  const handleMouseEnter = () => {
    setDropDown(true)
  }

  const handleMouseLeave = () => {
    setDropDown(false)
  }

  return (
    <div className='app'>
      <nav>
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Dropdown Menu</h3>
          {dropdown && <DropdownMenu />}
        </div>
      </nav>
    </div>
  )
}
