import React, { useRef } from 'react'
import './style.css'
import DropdownButton from '../dropdownButton'
import { useDropdown } from '../../customHooks/useDropdown'
import { useOutsideClick } from '../../customHooks/useOutsideClick'


export default function DropdownMenu({ buttonContent, dropdownContent }) {

  const { dropdownVisible, toggleDropdown, closeDropdown } = useDropdown()

  const dropdownRef = useRef(null)
  useOutsideClick(dropdownRef, closeDropdown)
    
  return (
    <div className="dropdown" ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown} dropdownVisible={dropdownVisible}>
        {buttonContent}
      </DropdownButton>
      <div className={ dropdownVisible ? "dropdown-menu active" : "dropdown-menu"}>
        <ul>
          {dropdownContent.map((item) => (
            <li key={item.id} onClick={closeDropdown}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}