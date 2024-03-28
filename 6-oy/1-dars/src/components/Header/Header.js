import React from 'react'
import NavLink from '../NavLink/NavLink'
import SearchIconBtn from '../SearchIconBtn/SearchIconBtn'

import SiteLogo from "../../assets/images/logo.svg"
import SearchIcon from "../../assets/images/Search.svg"
import BasketIcon from "../../assets/images/basket.svg"
import Button from '../../components/Button/Button';

function Header() {
  return (
    <header className='p-5'>
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        <a href="#">
            <img src={SiteLogo} alt="Site Logo" width={106} height={38} />
        </a>
        <nav className='flex items-center space-x-[40px]'>
          <ul className='flex items-center space-x-[25px]'>
            <NavLink title={"Home"}/>
            <NavLink title={"Service"}/>
            <NavLink title={"Top cities"}/>
            <NavLink title={"Contract"}/>
          </ul>
          <div className='flex items-center space-x-[25px]'>
              <SearchIconBtn imgURL={SearchIcon} imgAlt={"Search Icon"} imgWidth={24} imgHeight={24}/>
              <SearchIconBtn imgURL={BasketIcon} imgAlt={"Basket Icon"} imgWidth={24} imgHeight={24}/>
          </div>
          <Button btnWidth={120} title={"Sign up"}/>
        </nav>
      </div>
    </div>
</header>
  )
}

export default Header