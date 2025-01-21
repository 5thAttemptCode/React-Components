import React from 'react'
import ValidationInput from './components/validationInputField';
import { validateEmail, validatePassword } from './utils/validationUtils/validation';


export default function ValidationInputContainer() {

  return (
    <section>
      <form>
        <ValidationInput
          type="email"
          placeholder="Enter your email"
          validation={validateEmail}
          errorMsg={validateEmail('')}  
        />
        <ValidationInput
          type="password"
          placeholder="Enter your Password"
          validation={validatePassword}
          errorMsg={validatePassword('')}  
        />
      </form>
    </section>
  )
}