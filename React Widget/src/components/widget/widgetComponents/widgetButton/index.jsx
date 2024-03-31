import React from 'react'


export default function WidgetButton({ active, onClick, children }) {

  return (
    <button
      className={active ? "button active" : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
