import React, { useContext } from 'react'
import { ModalContext } from '../../context'


export default function Modal() {

  const { isActive } = useContext(ModalContext)
  const className = isActive ? "modal active" : "modal"

  return (
    <div className={className}>
      Modal Window
    </div>
  )
}
