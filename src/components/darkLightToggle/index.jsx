import React from 'react'
import { Sun, Moon } from 'phosphor-react'
import useTheme from './customHooks/useTheme'


export default function LightSwitch() {

  const { theme, toggleTheme } = useTheme()

  const iconSize = 50

  return(
    <section>
      <button onClick={toggleTheme} >
        {theme === 'dark' ? 
          <Sun size={iconSize} /> 
          : 
          <Moon size={iconSize} />
        }
      </button>
    </section>
  )
}