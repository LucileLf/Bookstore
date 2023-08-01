import React from 'react';
import "./book.scss";


function Book (props) {

  const { title, author, cover, summary, price, genre } = props.book;
  const style = {
    backgroundImage: `url('${cover}')`
  };

  return <div className="book">
    <div className="book-cover" style={style}>
    </div>
    <div className="book-info">
      <span className="book-title">{title}</span>, {author}
      <div className="book-price">
        {price}
      </div>
    </div>

  </div>
}


export default Book;
