import React, { useRef } from 'react'
import './style.css'
import DropdownButton from '../dropdownButton'
import { useDropDown } from '../../customHooks/useDropdown'
import { useOutsideClick } from '../../customHooks/useOutsideClick'


export default function DropdownMenu({ children }) {

  const { dropdownVisible, setDropdownVisible } = useDropDown()

  const dropdownRef = useRef(null)
  useOutsideClick(dropdownRef, () => setDropdownVisible(false))
    
  return (
    <div className="dropdown" ref={dropdownRef}>
      <DropdownButton>
        Explore
      </DropdownButton>
      <div className={ dropdownVisible ? "dropdown-menu active" : "dropdown-menu"}>
        {children}
      </div>
    </div>
  )
}


