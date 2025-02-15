import React, { useState } from 'react'
import '../../style.css'


export default function ValidationInput({
  type,
  placeholder = "Enter value",
  validation = () => true,
  errorMsg = "Invalid input",
  onValidInput = () => {},
}) {

  const [ value , setValue ] = useState("")
  const [ isValid, setIsValid ] = useState(true)
    
  const handleChange = (e) => {
    const inputValue = e.target.value
    setValue(inputValue)

    const validationMessage = validation(inputValue)
    setIsValid(validationMessage === "")

    if (validationMessage === "") {
      onValidInput(inputValue)
    }
  }

  return (
    <div className="input-container">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`input ${isValid ? "" : "invalid"}`}
      />
      {!isValid && <span className="error-msg">{errorMsg}</span>}
    </div>
  )
}
