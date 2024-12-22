import React from 'react'
import { Link } from 'react-router-dom'
import { useSidebar } from '../../../../customHooks/useSidebar'


export default function SidebarItems({ items }) {

  const { toggleSidebar } = useSidebar()

  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.path} onClick={toggleSidebar}>
            {item.icon}
            {item.title}
          </Link>
        </li>
      ))}
    </>
  )
}
