import React, { useState, useMemo } from "react"
import SearchInput from "../searchInput"
import SearchResult from "../searchResult"


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
      <SearchInput value={searchText} onChange={handleChange} />
      <SearchResult results={filteredData} searchText={searchText} />
    </div>
  )
}