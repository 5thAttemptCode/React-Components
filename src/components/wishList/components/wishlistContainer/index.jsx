import React, { useContext } from 'react'
import { WishlistContext } from '../../context'
import { Trash } from 'phosphor-react'


export default function WishlistContainer() {
  
  const { wishlist, removeFromWishlist } = useContext(WishlistContext)

  if(wishlist.length === 0){
    return <p>Haven't made a wish yet</p>
  }

  return (
    <section className='wishlist-container'>
      <h2>Your wishlist</h2>
      <ul>
        {wishlist.map((wish) => (
          <li key={wish.id} className='wishlist-container-li'>
            <p>{wish.name}</p>
            <p>price: ${wish.price}</p>
            
            <abbr title="Remove from wishlist">
              <button onClick={() => removeFromWishlist(wish.id)}>
                <Trash size={20} />
              </button>
            </abbr>
          </li>
        ))}
      </ul>
    </section>
  )
}