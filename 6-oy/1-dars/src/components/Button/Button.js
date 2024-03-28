
import React from 'react'

function Button({title, btnWidth}) {
  return (
    <button className={`bg-orange-600 text-white font-semibold w-[${btnWidth}px] p-[10px] rounded-[8px]`}>{title}</button>
  )
}

export default Button