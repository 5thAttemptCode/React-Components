import React, { useState } from 'react'
import axios from 'axios'


export default function useFileUpload(uploadURL) {

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
      await axios.post(uploadURL, formData, {
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
      setTimeout(() => {
        setFile(null)
        setStatus("idle")
        setUploadProgress(0)
      }, 1500)

    } catch(error){
      setStatus("error")
      setUploadProgress(0)
    }
  }

  return {
    file,
    status,
    uploadProgress,
    handleFileChange,
    handleFileUpload,
  }
}