import React from 'react'
import Navbar from './components/navbar'
import ProductContainer from './components/productContainer'
import WishlistContainer from './components/wishlistContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { WishlistProvider } from './context'


export default function WishList() {

  return (
    <WishlistProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/wishlist" element={<WishlistContainer />} />
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  )
}