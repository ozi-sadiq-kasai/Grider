// import { useState,useContext } from 'react'
// import BookEdit from './BookEdit'
// import BooksContext from '../context/books'

// const BookShow = ({book}) => {
//  const [editBook,setEditBook] = useState(false)
//  const {deleteBook} = useContext(BooksContext)

//  const handleEditClick =()=>{
//   setEditBook(!editBook) 
//  }

//  const handleBookDelete = (id)=>{
//   deleteBook(book.id)
//  }

//  const handleSubmit =()=>{
//    setEditBook(false)
//   }


// let displays= <h2>{book.title}</h2>
// if(editBook){
//  displays=<BookEdit  submit={handleSubmit} book={book}/>
// }

//   return (
//     <div>
//     {displays}
//       <button onClick={handleBookDelete}>remove</button>
//       <button onClick={handleEditClick}>Edit</button>
//     </div>
//   )
// }
// export default BookShow

import BookEdit from "./BookEdit"
import { useState,useContext } from "react"
import BooksContext from "../context/books"

const BookShow = ({book}) => {
 const {deleteBook} = useContext(BooksContext)
 const [editBtn,setEditBtn] = useState(false)

 const handleDelete =()=>{
  deleteBook(book.id)
 }

 const handleEditBtn =()=>{
  setEditBtn(!editBtn)
 }
 

console.log(book)
  let title = <h1>{book.title}</h1>
  if(editBtn === true){
   title = <BookEdit book={book} onEditBtn={handleEditBtn}/>
  }

  return (
   <div>
   {title}
     <button onClick={handleDelete}>Delete</button>
     <button onClick={handleEditBtn}>Edit</button>
   </div>
  )
}
export default BookShow