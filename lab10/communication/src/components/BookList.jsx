import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import EditBookForm from "./EditBookForm";


const BookList = (props) =>{
    const {books, loading} = useBookContext();
    const[book,setBook] = useState({});
    const[editing,setEditing] = useState(false);

    const handlerDeletingBook = (id) => {
        props.handlerDelete(id);
    }

    const editingBook = (event) =>{
        setEditing(true);
        setBook(event);
    }

    const stopEditing = () => {
        setEditing(false);
    };

    return (
        <div>
            {editing && (<EditBookForm book={book} handlerUpdate={editingBook} onCancel={stopEditing}/>)}
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