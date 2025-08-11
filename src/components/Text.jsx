import React from 'react'

const Text = ({children,classlist}) => {
  return (
    <p className={ ` text-[14px] text-[#A0AEC0] ${classlist}`}>{children}</p>
  )
}

export default Text
