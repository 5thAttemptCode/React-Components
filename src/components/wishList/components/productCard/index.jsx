import React from 'react'
import '../../style.css'
import LikeButton from '../likeButton'


export default function ProductCard({ itemArray }) {

  if(!itemArray){
    return <p>No products available</p>
  }

  return (
    <ul className='product-card-ul'>
      {itemArray.map(item => 
        <li key={item.id} className='product-card-li'>
          <LikeButton product={item} />
          <img src="" alt={item.name} />
          <h3>{item.name}</h3>
          <p>price: ${item.price}</p>
        </li>
      )}
    </ul>
  )
}