import React from "react"
import './style.css'
import { List, X } from 'phosphor-react'
import { SideData } from "../data/index.jsx"
import SidebarItems from "./components/sidebarItems/index.jsx"
import ToggleButton from "./components/toggleButton/index.jsx"
import { useSidebar } from "../../customHooks/useSidebar/index.jsx"


export default function Navbar() {

  const { sidebar } = useSidebar()
  
  const navClass = sidebar ? "active" : ""

  return (
    <>
      <ToggleButton className="hamburger">
        <List size={32} color="#060140" />
      </ToggleButton>
      
      <nav className={navClass}>
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
