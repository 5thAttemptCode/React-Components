import React from 'react'


export default function FileInfo({ file }) {

  return (
    <div>
      {file && (
        <div>
          <p>File name: {file.name}</p>
          <p>File size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}
    </div>
  )
}
