import React, { useContext } from 'react'
import { ModalContext } from '../../context'


export default function ModalButton() {
    
  const { toggleModal } = useContext(ModalContext)

  return (
    <button onClick={toggleModal}>
      TOGGLE
    </button>
  )
}