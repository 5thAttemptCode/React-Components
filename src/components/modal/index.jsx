import React from 'react'
import { ModalProvider } from './context'
import Modal from './components/modal'
import ModalButton from './components/modalButton'


export default function ModalComponent() {

  return (
    <ModalProvider>
      <section>
        <Modal />
        <div className="open-modal">
          <ModalButton>
            Open Modal
          </ModalButton>
        </div>
      </section>
    </ModalProvider>
  )
}