

// import BookShow from "./BookShow"
// import { useContext } from "react"
// import BooksContext from "../context/books"

// const BookList = () => {

//  const{books} = useContext(BooksContext)


//  const bookList=books.map((book)=>{
//   return(
//   <BookShow key={book.id} book={book}/>
//   )

//  }
// )
//   return (
//     <div>
//      {bookList}
//     </div>
//   )
// }
// export default BookList



import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

const BookList = () => {
  const { books } = useContext(BooksContext);

  // Check if books is defined before mapping over it
  const bookList =
    books &&
    books.map((book) => <BookShow key={book.id} book={book} />);

  return <div>{bookList}</div>;
};

export default BookList;