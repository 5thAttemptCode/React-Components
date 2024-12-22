import React, { useState } from 'react'


export const ModalContext = React.createContext()

export function ModalProvider({ children }) {

  const [ isActive, setIsActive ] = useState(false)

  const toggleModal = () => {
    setIsActive(!isActive)
  }

  return (
    <ModalContext.Provider value={{ isActive, toggleModal }}>
    {children}
    </ModalContext.Provider>
  )
}