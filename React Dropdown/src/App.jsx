import React from 'react'
import DropdownMenu from './components/dropdown'
import DropdownContent from './components/dropdown/dropdownContent'


export default function App() {
  return (
    <>
      <DropdownMenu buttonContent="Explore " >
        <DropdownContent />
      </DropdownMenu>
    </>
  )
}

