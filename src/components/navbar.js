import "./navbar.scss";
import logo from '../logo.png';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
//import './search.scss';
//import Search from './search'

function Navbar ({ onChange }) {

  const [input, setInput] = useState("");

  const handleChange = (value) => {
    setInput(value);
    onChange(value);
  }
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="logo-img" alt="logo" />
      </div>

      <div className="search">
        <input
          type="text"
          placeholder="Rechercher..."
          name="searchBar"
          id="searchBar"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />

        <FaSearch id="search-icon" />
      </div>

      <div className="cart">

      </div>
    </div>
  )
}

export default Navbar;
