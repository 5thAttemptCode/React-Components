import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import Messages from './pages/Messages'
import Team from './pages/Team'
import Support from './pages/Support'
import Navbar from './components/navbar'
import { SidebarProvider } from './context'


export default function Sidebar() {

  return (
    <SidebarProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/reports" element={ <Reports /> }/>
          <Route path="/products" element={ <Products /> }/>
          <Route path="/messages" element={ <Messages /> }/>
          <Route path="/team" element={ <Team />} />
          <Route path="/support" element={ <Support /> }/>
        </Routes>
      </Router>
    </SidebarProvider>
  )
}
