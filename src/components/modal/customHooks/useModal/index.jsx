import { useContext } from "react"
import { ModalContext } from "../../context"


export const useModal = () => {

  const context = useContext(ModalContext)

  if(!context) {
    throw new err("useModal must be used within SidebarProvider")
  }

  return context
}