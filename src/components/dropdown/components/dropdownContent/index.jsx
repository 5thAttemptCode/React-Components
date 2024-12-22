import React from 'react'
import DropdownItems from '../../data'
import { useDropDown } from '../../customHooks/useDropdown'


export default function DropdownContent() {

  const { toggleDropdown } = useDropDown()
  
  return (
    <ul>
      {DropdownItems.map((item) => (
        <li key={item.id} onClick={toggleDropdown}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}