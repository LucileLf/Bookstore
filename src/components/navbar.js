import React from 'react';
import "./navbar.scss";
import logo from '../logo.png'
import Search from './search'

function Navbar () {
  // function handleSearch () {

  // }
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="logo-img" alt="logo" />
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="cart">

      </div>
    </div>
  )
}

export default Navbar;
