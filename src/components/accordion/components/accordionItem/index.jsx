import { Plus, X } from 'phosphor-react'
import React from 'react'


export default function AccordionItem({ title, content, isOpen, onClick }) {

  const size = 20
  const plus = <Plus size={size} />
  const minus = <X size={size} />

  return (
    <div className="accordion-item">
      <button className="accordion-button" onClick={onClick}>
        {title}
        <span>{isOpen ? minus : plus}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          {content}
        </div>
      )}
    </div>
  )
}