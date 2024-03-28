import React from 'react'
import Logo from "../../assets/Images/Logo.svg"
import NavList from '../NavList/NavList'
import {SearchIcon, BasketIcon} from "../../assets/Images/Icons"
import Button from '../Button/Button'
function Header() {
  return (
    <header className='py-[60px]'>
        <div className='container mx-auto flex items-center justify-between'>
          <a href='/'>
            <img src={Logo} alt='Site Logo' width={106} height={38}/>
          </a>
          <nav className='flex items-center space-x-[60px]'>
            <ul className='flex items-center space-x-[57px]'>
              <NavList title={'Home'}/>
              <NavList title={'Service'}/>
              <NavList title={'Top cities'}/>
              <NavList title={'Contract'}/>
            </ul>
            <button>
                <SearchIcon/>
            </button>
            <button>
                <BasketIcon/>
            </button>
            <Button extraStyle={'w-[120px] py-[14px]'} title={"Sign Up"}/>
          </nav>
        </div>
      </header>
  )
}

export default Header