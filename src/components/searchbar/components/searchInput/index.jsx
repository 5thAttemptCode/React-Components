import React from 'react'


export default function SearchInput({ value, onChange}) {

  return (
    <input 
      type="text" 
      placeholder="Search..."
      value={value}
      onChange={onChange}
    />
  )
}
