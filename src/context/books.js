import { useState,createContext,useCallback} from "react";
import axios from "axios";

const BooksContext = createContext()

const BooksProvider = ({children})=>{
 const [books,setBooks] = useState([])

 const fetchBooks = useCallback(async()=>{
  const response = await axios.get('http://127.0.0.1:3001/books')
  setBooks(response.data)
 },[])

  const createBook= async(title)=>{
  const response =await axios.post('http://127.0.0.1:3001/books',{
   title:title
  }) 
  const updatedBook = [
   ...books,response.data]
  setBooks(updatedBook)
 } 

 const editBook = async(id, title) => {
   const response = await axios.put(`http://127.0.0.1:3001/books/${id}`,{
    title
   })
    const updateTitle = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data};
      }
      return book;
    });
    setBooks(updateTitle);
  };

 const deleteBook = async (id)=>{
  await axios.delete(`http://127.0.0.1:3001/books/${id}`)
  const updatedBook = books.filter((book)=> book.id !== id)
  setBooks(updatedBook)
 }


 const valueToShare = {
  books,
  createBook,
  fetchBooks,
  deleteBook,
  editBook
 }
 return(
  <BooksContext.Provider value={valueToShare}>
   {children}
  </BooksContext.Provider>
 )
}
export {BooksProvider}
export default BooksContext