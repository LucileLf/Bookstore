import React from 'react';
import { useParams, Link } from 'react-router-dom';
import books from '../library'
import "./show.scss";
import {FaHeart} from 'react-icons/fa';


function Show() {
  //const { title, author, cover, summary, price, genre } = props.book;
  //detailed information about each book, such as customer reviews, ratings, and related books.
  const book = books[parseInt(useParams().id)]
  // const style = {
  //   backgroundImage: `url('${book.cover}')`
  // };


  return <div className="show-container">
    <Link to={`/`}>Retour à l'accueil</Link>

    <div className="show-book">
      <div className="show-book-cover">
        <img src={book.cover} alt="" />
      </div>

      <div className="show-book-info">
        <p> <span className="titre">Titre:</span> {book.title}</p>
        <p><span className="titre">Auteur:</span> {book.author}</p>
        <p><span className="titre">Genre:</span> {book.genre.join(', ')}</p>
        <p><span className="titre">Résumé:</span> {book.summary} </p>
        <p><span className="titre">Prix:</span> {book.price}</p>
        <button>Ajouter au panier</button>
        <button><FaHeart id="heart-icon" />Ajouter aux favoris</button>

      </div>

    </div>
  </div>
}

export default Show;
