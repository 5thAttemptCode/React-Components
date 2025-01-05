import { createContext, useState } from "react"


export const WishlistContext = createContext()

export const WishlistProvider = ({ children }) => {
    
  const [ wishlist, setWishlist ] = useState([])

  const handleWishlist = (newItem) => {
    setWishlist((currentWishList) => {
      const itemExist = currentWishList.find((item) => item.id === newItem.id)

      if(itemExist){
        return currentWishList.filter((item) => item.id !== newItem.id)
      } else{
        return [ ...currentWishList, newItem ]
      }
    })
  }

  const removeFromWishlist = (id) => {
    setWishlist((currentWishlist) => currentWishlist.filter((wish) => wish.id !== id));
  }
  
  return (
    <WishlistContext.Provider value={{ wishlist, handleWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
}