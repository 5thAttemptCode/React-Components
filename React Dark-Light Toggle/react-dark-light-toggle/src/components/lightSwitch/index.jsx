import React, { useEffect, useState } from 'react'
import { Sun, Moon } from 'phosphor-react'


export default function LightSwitch() {

  const [theme, setTheme] = useState(() => window.localStorage.getItem('theme') || 'light')

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark-mode', theme === 'dark')
  }, [theme])
  
  return(
    <button 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} 
      className='icon-button'
    >
      {theme === 'dark' ? 
        <Sun className='theme-switch' size={32} /> 
        : 
        <Moon className='theme-switch' size={32} />
      }
    </button>
  )
}
  