import books from '../library'
import Book from '../components/book';
import {Link} from "react-router-dom"


function Index() {
  return(
    <div className="main">
      <div className="books">
        {/* add condition (if no query, dispaly all book, else...) */}
        {books.map((book, index) => (
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
