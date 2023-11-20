import { useState } from "react";


const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
)

const buttons = ["Details", "Metrics", "Orders", "Insights"]

const contents = [
  `Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. 
  Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum`,

  `Hello volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. 
  Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.`,

  `Nej volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. 
  Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.`,

  `BMW volutpat ipsum ac ipsum feugiat, vel molestie elit vestibulum. 
  Donec luctus commodo dictum. Aenean in turpis erat. Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.`
]


export const Widget = () => {
  const [ activeBlock, setActiveBlock ] = useState(0)

  const toggleMenuBlock = (index) => {
    setActiveBlock(index)
  }

  return (
    <article className="card">
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
          {button}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div className="content">
          <div className="block">
            <h2>{buttons[activeBlock]}</h2>
            <p>{contents[activeBlock]}</p>
          </div>
        </div>
      </div>
    </article>
  )
}