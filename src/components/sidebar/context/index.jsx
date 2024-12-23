import { createContext, useState } from "react"


export const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {

  const [ sidebar, setSidebar ] = useState(false)
    
  const toggleSidebar = () => setSidebar(prev => !prev)

  return (
    <SidebarContext.Provider value ={{ sidebar, setSidebar, toggleSidebar}}>
      {children}
    </SidebarContext.Provider>
  )
}