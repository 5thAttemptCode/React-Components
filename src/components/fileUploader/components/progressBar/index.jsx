import React from 'react'
import '../../style.css'


export function ProgressBar({ progress }) {

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <p>{progress}% uploaded</p>
    </div>
  )
}
