

import React from 'react'

function NavLink({title}) {
  return (
    <li className=''>
        <a className='text-[16px] font-semibold hover:text-orange-500' href='#'>{title}</a>
    </li>
  )
}

export default NavLink