import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const LinkNames = [
    {
        id: 1,
        link: "Home"
    },
    {
        id: 2,
        link: "Products"
    },
    {
        id: 3,
        link: "About"
    },
    {
        id: 4,
        link: "Legal"
    },
    {
        id: 5,
        link: "Contact"
    },
]


export default function DropdownContent() {
  return (
    <Router>
      {LinkNames.map(item => 
        <Link key={item.id} to={`/${item.link.toLowerCase()}`}>
          {item.link}
        </Link>
      )}
    </Router>
  )
}