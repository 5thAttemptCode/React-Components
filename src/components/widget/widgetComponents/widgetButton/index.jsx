import React from 'react'
import '../../style.css'


export default function WidgetButton({ active, onClick, children }) {

  return (
    <button
      className={active ? "active" : ""}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
