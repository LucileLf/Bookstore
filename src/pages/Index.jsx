import React, { useState } from 'react';
//import Search from "../components/search";
import Book from '../components/book';
import {Link} from "react-router-dom"
import books from '../library'

function Index({ searchInput }) {

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return(
    <div className="main">
      <div className="books">
        {/* add condition (if no query, dispaly all book, else...) */}
        {filteredBooks.map((book, index) => (
          <Link key={index} to={`/book/${index}`}>
            <Book key={index}
            book={book}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Index;
