import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Reports from './Pages/Reports.jsx'
import Products from './Pages/Products.jsx'
import Messages from './Pages/Messages.jsx'
import Team from './Pages/Team.jsx'
import Support from './Pages/Support.jsx'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/reports" element={ <Reports />}/>
        <Route path="/products" element={ <Products />}/>
        <Route path="/messages" element={ <Messages />}/>
        <Route path="/team" element={ <Team />}/>
        <Route path="/support" element={ <Support />}/>
      </Routes>
    </Router>
  )
}

