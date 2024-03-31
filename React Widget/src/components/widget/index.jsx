import React, { useState } from 'react'
import WidgetButton from './widgetComponents/widgetButton'
import WidgetBlock from './widgetComponents/widgetBlock'
import { BUTTONS, CONTENT } from './widgetComponents/data'


export default function Widget() {

  //0 is the default value
  const [ activeBlock, setActiveBlock ] = useState(0)

  const toggleMenuBlock = (index) => setActiveBlock(index)

  const widgetBlockData = CONTENT[activeBlock]

  return (
    <article className="widget-card">
      <div className="widget-buttons">
        {BUTTONS.map((button, index) => (
          <WidgetButton
            key={index}
            active={index === activeBlock}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </WidgetButton>
        ))}
      </div>
      <div className="widget-block-wrapper">
        <div className="widget-block-content">
          {widgetBlockData && 
            <WidgetBlock
              title={widgetBlockData.title}
              content={widgetBlockData.content}
            />
          }
        </div>
      </div>
    </article>
  )
}
