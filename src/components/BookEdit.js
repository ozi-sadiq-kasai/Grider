// import { useState,useContext } from "react"
// import BooksContext from "../context/books"

// const BookEdit = ({submit,book}) => {
//  const [newTitle,setNewTitle] = useState(book.title)
//  const {handleEditTitle} = useContext(BooksContext)

//  const handleChange = (event)=>{
//   setNewTitle(event.target.value)
//  }
//  const handleSubmit =(event)=>{
//   event.preventDefault()
//    submit()
//   handleEditTitle(book.id, newTitle)
   
//  }


//   return (
//     <div>
//      <form onSubmit={handleSubmit}>
//       <input 
//       type="text"
//       value={newTitle}
//       onChange={handleChange}
//        />
//        <button type='submit'>Save</button>
//      </form>
//     </div>
//   )
// }
// export default BookEdit
import { useState,useContext } from "react"
import BooksContext from "../context/books"

const BookEdit = ({book,onEditBtn}) => {
 const {editBook} = useContext(BooksContext)
 const[editTitle,setEditTitle] = useState(book.title)

 const handleEditTitle = (event)=>{
  setEditTitle(event.target.value)
 }
 const handleSubmitEdit = (event)=>{
  event.preventDefault()
  editBook(book.id,editTitle)
  onEditBtn(false)
 }
 console.log(editTitle)

  return (
    <div>
     <form onSubmit={handleSubmitEdit}>
      <input 
      type="text"
      value={editTitle}
      onChange={handleEditTitle}
       />
      <button type='submit'>Save</button>
     </form>
    </div>
  )
}
export default BookEdit