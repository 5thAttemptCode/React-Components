import React from 'react'
import SearchBar from './components/searchbar'
import userData from './components/data'


export default function App() {
  return (
    <>
      <SearchBar data={userData} />
    </>
  )
}
