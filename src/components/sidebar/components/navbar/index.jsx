import React, { useRef } from "react"
import './style.css'
import SidebarItems from "./components/sidebarItems/index.jsx"
import ToggleButton from "./components/toggleButton/index.jsx"
import { List, X } from 'phosphor-react'
import { SideData } from "../data/index.jsx"
import { useSidebar } from "../../customHooks/useSidebar/index.jsx"
import { useClickOutside } from "../../customHooks/useClickOutside/index.jsx"


export default function Navbar() {

  const { sidebar, setSidebar } = useSidebar()

  const sidebarRef = useRef(null)
  useClickOutside(sidebarRef, () => setSidebar(false))
  
  const navClass = sidebar ? "active" : ""

  return (
    <>
      <ToggleButton className="hamburger">
        <List size={32} color="#060140" />
      </ToggleButton>
      
      <nav className={navClass} ref={sidebarRef}>
        <ToggleButton className="close">
          <X size={20} color="#ffffff" />
        </ToggleButton>
        <ul>
          <SidebarItems items={SideData} />
        </ul>
      </nav>
    </>
  )
}
