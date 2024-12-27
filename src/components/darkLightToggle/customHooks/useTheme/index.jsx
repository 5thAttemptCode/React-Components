import React, { useEffect, useState } from 'react'


export default function useTheme( initialTheme = "dark") {

  const [ theme, setTheme ] = useState(() => {
    return window.localStorage.getItem('theme') || initialTheme
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', theme === 'dark')
    window.localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}