import React from 'react'
import '../../style.css'
import { useModal } from '../../customHooks/useModal'


export default function ModalButton({ children }) {
    
  const { toggleModal } = useModal()

  return (
    <button onClick={toggleModal}>
      {children}
    </button>
  )
}