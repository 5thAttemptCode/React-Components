import React, { useState } from 'react'


function SearchBar(props) {

  const [ searchData, setSearchData ] = useState(props.data)

  const handleChange = event => {
    const searchText = event.target.value;
    const newData = props.data.filter(item =>
      item.name.toUpperCase().startsWith(searchText.toUpperCase())
    )

    setSearchData(newData)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <ul>
        {searchData.length > 0 ? (
          searchData.map((item, index) => 
            <li key={index}>{item.name}</li>
          )
        ) : (
          <p>Sorry, no match</p>
        )}
      </ul>
    </div>
  )
}

export default SearchBar