import React from 'react'
import '../../style.css'
import { X } from 'phosphor-react'
import ModalButton from '../modalButton'
import { useModal } from '../../customHooks/useModal'


export default function Modal() {

  const { isActive } = useModal()

  const modalClass = isActive ? "modal active" : "modal"

  return (
    <div className={modalClass}>
      <ModalButton>
        <X size="32" color="#ffffff" />
      </ModalButton>
    </div>
  )
}
