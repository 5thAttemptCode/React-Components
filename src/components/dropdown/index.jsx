import React from 'react'
import DropdownContent from './components/dropdownContent'
import DropdownMenu from './components/dropdownMenu'
import { DropdownProvider } from './context'


export default function DropdownComponent() {

  return (
    <DropdownProvider>
      <section>
        <DropdownMenu buttonContent="Explore">
          <DropdownContent />
        </DropdownMenu>
      </section>
    </DropdownProvider>
  )
}
