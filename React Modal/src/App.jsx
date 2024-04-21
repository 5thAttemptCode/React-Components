import React from 'react'
import ModalButton from './components/modalButton'
import Modal from './components/modal'
import { ModalProvider } from './context'


export default function App() {
  return (
    <ModalProvider>
      <ModalButton />
      <Modal />
    </ModalProvider>
  )
}
