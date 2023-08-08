import React from 'react';
import { HashLink } from 'react-router-hash-link';
import  "../styles/Header.scss"


function Header() {
  return (
    <nav>
        <div className="logo">
            <h2>Tasty</h2>
        </div>
        <div className="nav-item">
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#service"} className='servicebox'>Service</HashLink>
            <HashLink to={"/#menu"} className='menubox'>Menu</HashLink>
            <HashLink to={"/#contact"} >Contact</HashLink>
        </div>
    </nav>
  )
}

export default Header