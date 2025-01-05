import React from 'react'


export default function Counter({ array }) {

  return (
    <>
      {array.length > 0 && (
        <span className='counter'>{array.length}</span>
      )}
    </>
  )
}