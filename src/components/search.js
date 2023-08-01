import React from 'react';
import { useState } from "react";
import './search.scss';
import {FaSearch} from 'react-icons/fa';
//import books from '../library';

function Search ({ onChange }) {
  const [input, setInput] = useState("");

  const handleChange = (value) =>  {
    setInput(value);
    onChange(value);
  }

  return (

    <div className="searchContainer">
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
  )
}
