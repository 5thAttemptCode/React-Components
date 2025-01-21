// Email validation function
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) ? "" : "Please enter a valid email address"
}

// Password validation function (minimum 8 characters, at least 1 letter and 1 number)
export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return passwordRegex.test(password) ? "" : "Password must be min. 8 characters long and include letters and numbers"
}

// Name validation (only letters allowed)
export const validateName = (name) => {
  const nameRegex = /^[A-Za-z\s]+$/
  return nameRegex.test(name) ? "" : "Name should contain only letters and spaces"
}

// Generic required field validation
export const validateRequired = (value) => {
  return value.trim() !== "" ? "" : "This field is required"
}

// Phone number validation (basic example for numbers only)
export const validatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[0-9]{10}$/
  return phoneRegex.test(phoneNumber) ? "" : "Please enter a valid 10-digit phone number"
}