import React from 'react'
import './style.css'
import AccordionContainer from './components/accordionContainer'
import FaqData from './data/data'


export default function Accordion() {

  return (
    <section>
      <AccordionContainer data={FaqData} />
    </section>
  )
}