import React from 'react'

function NavList({title}) {
  return (
    <li>
        <a className='text-[17px] hover:text-orange-500  transition' href='#'>{title}</a>
    </li>
  )
}

export default NavList