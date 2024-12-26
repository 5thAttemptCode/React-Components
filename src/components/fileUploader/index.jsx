import axios from 'axios'
import React, { useState } from 'react'
import './style.css'


export default function FileUploader() {

  const [ file, setFile ] = useState(null)
  const [ status, setStatus ] = useState("idle")
  const [ uploadProgress, setUploadProgress ] = useState(0)

  function handleFileChange(e){
    if(e.target.files){
      setFile(e.target.files[0])
    }
  }

  async function handleFileUpload(){
    if(!file) return

    setStatus("uploading")
    setUploadProgress(0)

    const formData = new FormData()
    formData.append("file", file)

    try{
      await axios.post("https://httpbin.org/post", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = progressEvent.total ? 
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : 0
          setUploadProgress(progress)
        }
      })
      setStatus("success")
      setUploadProgress(100)
    } catch(error){
      setStatus("error")
      setUploadProgress(0)
      console.error("Upload failed:", error);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div>
          <p>File name: {file.name}</p>
          <p>File size: {(file.size / 1024).toFixed(2)} KB</p>
          <p>Type: {file.type}</p>
        </div>
      )}
      {file && status !=="uploading" && 
        <button onClick={handleFileUpload}>Upload</button>
      }

      {status === "uploading" && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${uploadProgress}`}}></div>
          <p>{uploadProgress}% uploaded</p>
        </div>
      )}

      {status === "success" && (
        <p>SUCCESS</p>
      )}
      {status === "error" && (
        <p>fucked up..</p>
      )}
    </div>
  )
}
