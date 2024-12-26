import React from 'react'
import './style.css'
import useFileUpload from './customHooks/useFileUpload'
import { FileInput } from './components/fileInput'
import { ProgressBar } from './components/progressBar'
import FileInfo from './components/fileInfo'


export default function FileUploader({ uploadURL }) {

  const { file, status, uploadProgress, handleFileChange, handleFileUpload } = useFileUpload(uploadURL)

  return (
    <div>
      <FileInput onChange={handleFileChange} />
      <FileInfo file={file} />

      {file && status !=="uploading" && 
        <button onClick={handleFileUpload}>Upload</button>
      }

      {status === "uploading" && 
        <ProgressBar progress={uploadProgress} />
      }

      {status === "success" && (
        <p>Upload was successfull!</p>
      )}
      
      {status === "error" && (
        <p>Error, something went wrong</p>
      )}
    </div>
  )
}
