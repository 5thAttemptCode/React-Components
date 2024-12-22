import { createContext, useState } from "react"


export const DropdownContext = createContext()

export const DropdownProvider = ({ children }) => {

  const [ dropdownVisible, setDropdownVisible ] = useState(false)

  const toggleDropdown = () => setDropdownVisible(prev => !prev)

  return (
    <DropdownContext.Provider value={{ dropdownVisible, setDropdownVisible, toggleDropdown }}>
        {children}
    </DropdownContext.Provider>
  )
}