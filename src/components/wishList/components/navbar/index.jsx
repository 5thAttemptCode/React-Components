import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Heart } from 'phosphor-react'
import { WishlistContext } from '../../context'
import Counter from '../counter'


export default function Navbar() {

  const { wishlist } = useContext(WishlistContext)

  return (
    <nav>
      <Link to="/">
        Shop
      </Link>
      <Link to="/wishlist" className='wishlist-icon'>
        <Heart size={25} />
        <Counter array={wishlist} />
      </Link>
    </nav>
  )
}
