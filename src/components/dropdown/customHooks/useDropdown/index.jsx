import { useState } from 'react'


export function useDropdown() {

  const [ dropdownVisible, setDropdownVisible ] = useState(false)

  const toggleDropdown = () => setDropdownVisible((prev) => !prev)
  const closeDropdown = () => setDropdownVisible(false)

  return { dropdownVisible, toggleDropdown, closeDropdown }
}