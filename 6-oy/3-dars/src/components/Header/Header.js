import React from 'react'
import "./Header.scss"
function Header() {
  return (
    <header>
        <div className='container'>
            <div className='header'>
                <a href='/'>Logo</a>
                <nav>Navbar</nav>
            </div>
        </div>
    </header>
  )
}

export default Header