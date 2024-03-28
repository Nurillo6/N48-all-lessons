import React from 'react'

function Button({title,extraStyle, isContent,children}) {
  return (
    isContent ? 
    <button className={`${extraStyle} bg-orange-500 rounded-md text-[17px] text-white hover:opacity-90 transition`}>
      {children}
    </button>
    :
    <button className={`${extraStyle} bg-orange-500 rounded-md text-[17px] text-white hover:opacity-90 transition`}>{title}</button>
    
  )
}

export default Button