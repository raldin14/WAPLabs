import { useState } from 'react'
import { Route, Routes } from 'react-router'
import BookList from './components/BookList'
import { Library } from './components/Library'
import AddBookForm from './components/AddBookForm'
import EditBookForm from './components/EditBookForm'
function App() {

  return (
    <>
      <Routes>
        <Route element={<Library/>}>
          <Route index element={<BookList/>}/>
          <Route path='addbook' element={<AddBookForm/>}/>
          <Route path='editbook' element={<EditBookForm/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
