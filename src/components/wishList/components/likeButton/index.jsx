import React, { useContext } from 'react'
import { Heart } from 'phosphor-react'
import { WishlistContext } from '../../context'


export default function LikeButton({ product }) {

  const { wishlist, handleWishlist } = useContext(WishlistContext)
  const isLiked = wishlist.some((item) => item.id === product.id)

  // abbr variables
  const addToWishlist = "Add to wishlist"
  const removeFromWishlist = "Remove from wishlist"

  // icon variables
  const iconSize = 25
  const heartFilled = <Heart size={iconSize} color="#f20d0d" weight="fill" />
  const heartEmpty = <Heart size={iconSize} />

  return (
    <abbr title={ isLiked ? removeFromWishlist : addToWishlist}>
      <button onClick={() => handleWishlist(product)}>
        {isLiked ? heartFilled : heartEmpty}
      </button>
    </abbr>
  )
}