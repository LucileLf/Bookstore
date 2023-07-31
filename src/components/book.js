import React from 'react';
import ReactDOM from 'react-dom/client';


function Book (props) {
  return <div class="book">
    <div class="book-cover">
      <h2>Title: {props.title} </h2>
    </div>
    <div class="book-title"></div>
  </div>
}

export default Book;
