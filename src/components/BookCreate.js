// import {useState,useContext} from 'react'
// import BooksContext from '../context/books'

// const BookCreate = () => {
//  const [newTitle,setNewTitle] = useState('')
//  const {createBook}= useContext(BooksContext)


//  const handleChange = (event)=>{
//   setNewTitle(event.target.value)
//  }

//  const handleSubmit = (event)=>{
//   event.preventDefault()
//   createBook(newTitle)
//   setNewTitle('')
//  }
//   return (
//     <div>
//    <form onSubmit={handleSubmit}>
//      <input 
//      type="text"
//      onChange={handleChange}
//      value={newTitle} />
//      <button type='submit'>Submit</button>
//    </form>
//     </div>
//   )
// }
// export default BookCreate
import {useState,useContext} from 'react'
import BooksContext from '../context/books'


const BookCreate = () => {
 const [title,setTitle] = useState('')
 const {createBook} = useContext(BooksContext)

 const handleSubmit = (event)=>{
  event.preventDefault()
  createBook(title)
  setTitle('')
 }
 const handleChange = (event)=>{
 setTitle(event.target.value)
 }

  return (
    <div>
     <h1>Enter Book</h1>
     <form onSubmit ={handleSubmit}>
     <input 
     type="text"
     value={title}
     onChange={handleChange}
     />
     <button type='submit'>Submit</button>
    </form>
    </div>
  )
}
export default BookCreate
