import React from 'react'
import SearchBar from './components/searchbar'
import userNames from './data'


export default function Searchbar() {
  
  return (
    <section>
      <div>
        <h3>User Search</h3>
        <SearchBar data={userNames} />
      </div>
    </section>
  )
}
