import React from 'react'
import { CaretDown } from 'phosphor-react'


export default function DropdownButton({ onClick, children, dropdownVisible }) {

  return (
    <button onClick={onClick}>
      {children}
      <CaretDown className='caret' style={{ rotate: dropdownVisible ? '180deg' : ''}} />
    </button>
  )
}
