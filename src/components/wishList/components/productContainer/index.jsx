import React from 'react'
import productArray from '../../data/productData'
import ProductCard from '../productCard'


export default function ProductContainer() {
    
  return (
    <section>
      <ProductCard itemArray={productArray} />
    </section>
  )
}
