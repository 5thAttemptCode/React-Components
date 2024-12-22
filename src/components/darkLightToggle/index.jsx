import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'phosphor-react'


export default function LightSwitch() {

  const [ theme, setTheme ] = useState(() => {
    return window.localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [ theme ])
  
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  
  return(
    <section>
      <button 
        onClick={toggleTheme} 
      >
        {theme === 'dark' ? 
          <Sun size={50} /> 
          : 
          <Moon size={50} />
        }
      </button>
    </section>
  )
}
  