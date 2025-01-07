import React from 'react'


export default function SearchResult({ results, searchText }) {
  
  if(searchText && results.length === 0){
    return <p>Sorry, no match</p>
  }

  return (
    <ul>
      {results.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}
