import { useState } from 'react'
import { useBookContext } from './context/BookContext'
import './App.css'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
function App() {
  let{addBooks, deleteBooks} = useBookContext();
  const [adding,setAdding] = useState(false);
  
  const handlerAdd = (event) => {
    console.log(event, 'Function at adding')
    addBooks(event);
  }

  const handlerUpdate = (event) =>{
    console.log(event + "To update")
    updateBooks(event);
  }

  const handlerDelete = (event) =>{
    console.log(event + "To delete")
    deleteBooks(event);
  }

  const addingHandler = () =>{
    setAdding(true);
  }

  const canceling = () =>{
    setAdding(false);
  }
  return (
    <>
      {adding ? (<AddBookForm handlerAdd={handlerAdd} onCancel={canceling}/>) : (<button style={{backgroundColor: 'green'}} onClick={addingHandler}>Add New Book</button>)}
      <BookList handlerDelete={handlerDelete} handlerUpdate={handlerUpdate} />
    </>
  )
}

export default App
