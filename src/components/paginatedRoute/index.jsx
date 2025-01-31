import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/productsPage'
import ProductsRedirect from './components/redirect'


export default function PaginatedRoute() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsRedirect />} />
        <Route path="/products/:page" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  )
}