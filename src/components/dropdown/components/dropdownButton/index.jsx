import React from 'react'
import { CaretDown } from 'phosphor-react'
import { useDropDown } from '../../customHooks/useDropdown'


export default function DropdownButton({ children }) {

  const { dropdownVisible, toggleDropdown } = useDropDown()

  return (
    <button onClick={toggleDropdown}>
      {children}
      <CaretDown className='caret' style={{ rotate: dropdownVisible ? '180deg' : ''}} />
    </button>
  )
}
