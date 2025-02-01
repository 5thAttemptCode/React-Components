import React from 'react'
import '../../style.css'


export default function SkeletonLoader({ rows = 5 }) {

  return (
    <div className="skeleton-loader">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="skeleton-item"></div>
      ))}
    </div>
  )
}