import React, { useState, useMemo } from "react"


export default function SearchBar({ data = [] }) {

  const [ searchText, setSearchText ] = useState("")

  const handleChange = (event) => {
    setSearchText(event.target.value)
  }

  const filteredData = useMemo(() => {
    if (!searchText) return data
    return data.filter((item) =>
      item.name.toUpperCase().startsWith(searchText.toUpperCase())
    )
  }, [ searchText, data ])

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleChange}
      />
      <ul>
        {searchText && filteredData.length === 0 ? (
          <p>Sorry, no match</p>
        ) : (
          filteredData.map((item, index) => 
            <li key={index}>{item.name}</li>
          )
        )}
      </ul>
    </div>
  )
}