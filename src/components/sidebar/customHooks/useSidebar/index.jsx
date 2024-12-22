import { useContext } from "react"
import { SidebarContext } from "../../context"


export const useSidebar = () => {

  const context = useContext(SidebarContext)

  if(!context) {
    throw new err("useSidebar must be used within SidebarProvider")
  }

  return context
}