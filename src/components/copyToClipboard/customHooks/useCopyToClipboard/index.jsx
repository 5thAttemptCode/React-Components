import { useState } from 'react'


export function useCopyToClipboard( defaultText = "Click to copy", timeout = 1500 ) {

  const [ buttonText, setButtonText ] = useState(defaultText)

  const copyClipboard = (textToCopy) => {

    navigator.clipboard.writeText(textToCopy).then(() => {
      setButtonText("Copied to clipboard!")
      setTimeout(() => {
        setButtonText(defaultText)
      }, timeout)
    })
  }

  return { buttonText, copyClipboard }
}