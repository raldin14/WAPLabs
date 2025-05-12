import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { useNavigate } from "react-router";

const BookList = (props) =>{
    const {books,deleteBooks, loading} = useBookContext();
    const navigate = useNavigate();
    const handlerDeletingBook = (id) => {
        deleteBooks(id);
    }

    const editingBook = (book) =>{
        // setEditing(true);
        // setBook(event);
        navigate('/editbook',{state: {book}})
    }


    return (
        <div>
            {loading ? "Loading Changes...": ''}
            <h1>List of all books</h1>
            <table>
                <thead>
                    <tr>
                        <th>Book</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(b => <tr key={b.id}><td>{b.title}</td><td>{b.author}</td>
                    <td><button onClick={() => editingBook(b)} style={{backgroundColor:'orange', color:'white', margin: '3px'}}>Edit</button>
                    <button onClick={() => handlerDeletingBook(b.id)} style={{backgroundColor:'red', color:'white', margin: '3px'}}>Delete</button></td></tr>)}
                </tbody>
            </table>
        </div>
        )
}

export default BookList;