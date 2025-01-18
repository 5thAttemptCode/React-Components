import React, { useState } from 'react'
import '../../style.css'
import AccordionItem from '../accordionItem'


export default function AccordionContainer({ data }) {

  const [ openIndex, setOpenIndex ] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="accordion-container">
      {data.map((item, index) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  )
}