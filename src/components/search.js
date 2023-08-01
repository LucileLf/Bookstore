import React from 'react';
import { useState, useEffect } from "react";
import './search.scss';

function Search () {


  function handleSearch (e) {
    let searchTerm = e.target.value
  }


  return (
      <input
        type="text"
        placeholder="Rechercher..."
        name="searchBar"
        id="searchBar"
        onChange={handleSearch}
      />
  )
}

export default Search;
