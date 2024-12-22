import { useContext } from "react"
import { DropdownContext } from "../../context"


export const useDropDown = () => {

  const context = useContext(DropdownContext)

  if(!context) {
    throw new err("useSidebar must be used within SidebarProvider")
  }

  return context
}