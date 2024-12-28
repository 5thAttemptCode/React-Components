import React from 'react'
import DropdownItems from './data'
import DropdownMenu from './components/dropdownMenu'


export default function DropdownComponent() {

  return (
    <section>
      <DropdownMenu buttonContent="Explore" dropdownContent={DropdownItems} />
      <DropdownMenu buttonContent="Explore 2" dropdownContent={DropdownItems} />
    </section>
  )
}