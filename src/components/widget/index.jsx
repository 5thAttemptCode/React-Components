import React, { useState } from 'react'
import './style.css'
import { CONTENT } from './widgetComponents/data'
import WidgetBlock from './widgetComponents/widgetBlock'
import WidgetButton from './widgetComponents/widgetButton'


export default function Widget() {

  // Manage the active block state
  const [ activeBlock, setActiveBlock ] = useState(0)

  // Extract the data for the active block
  const widgetBlockData = CONTENT[activeBlock]

  return (
    <section>
      <article className="widget-wrapper">
        <div className="widget-buttons">
          {CONTENT.map((buttonContent, index) => (
            <WidgetButton
              key={index}
              active={index === activeBlock}
              onClick={() => setActiveBlock(index)}
            >
              {buttonContent.name}
            </WidgetButton>
          ))}
        </div>

        {widgetBlockData && 
          <WidgetBlock
            title={widgetBlockData.title}
            content={widgetBlockData.content}
          />
        }
      </article>
    </section>
  )
}
