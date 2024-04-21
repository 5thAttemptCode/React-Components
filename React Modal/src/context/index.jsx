import React from 'react'


export const ModalContext = React.createContext()

  export function ModalProvider({ children }) {
  const [isActive, setIsActive] = React.useState(false)

  // Toggle the active state
  const toggleModal = () => {
    setIsActive(!isActive)
  }

  // Pass a context value that holds our state and our function
  return (
    <ModalContext.Provider value={{ isActive, toggleModal }}>
    {children}
    </ModalContext.Provider>
  )
}