import React from 'react'
import '../../style.css'


export default function WidgetBlock({ title, content}) {
  return (
    <div className='widget-block'>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}
