import React from 'react'

function PopCategoryNavBtn({children, title}) {
    return (
        <li className='w-[210px] cursor-pointer py-[13px] flex items-center hover:text-white transition justify-center space-x-[8px] rounded-[8px] bg-orange-500'>
            {children}
            <span className='text-[20px]'>{title}</span>
        </li>
    )
}

export default PopCategoryNavBtn