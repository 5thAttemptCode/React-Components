import React from 'react'
import { useCopyToClipboard } from './customHooks/useCopyToClipboard'


export default function CopyToClipboard() {
    
  const { buttonText, copyClipboard } = useCopyToClipboard()

  const textToCopy = "Copy this text"

  return (
    <section>
      <button onClick={() => copyClipboard(textToCopy)}>
        {buttonText}
      </button>
    </section>
  )
}