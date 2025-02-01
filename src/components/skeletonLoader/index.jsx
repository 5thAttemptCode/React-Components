import React from 'react'
import useFetchData from './customHooks/useFetch'
import SkeletonLoader from './components/skeletonLoader'


export default function SkeletonLoaderComponent() {

  const { data, loading, error, } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  )

  if(loading){
    return <SkeletonLoader />
  }

  if(error){
    return <p>Error {error.message}</p>
  }

  return (
    <div>
      {data?.length ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}