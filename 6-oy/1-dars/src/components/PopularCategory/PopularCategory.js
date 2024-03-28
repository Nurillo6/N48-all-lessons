import React from 'react'

function PopularCategory({children, title}) {
  return (
        <button className='w-[210px] py-[8px] text-[#363853] text-[18px] hover:bg-orange-500  hover:text-white transition justify-center bg-slate-200 rounded-md flex items-center space-x-[10px]'>
            {children}
            <span>{title}</span>
        </button>
  )
}

export default PopularCategory