import { useState } from "react";
import { useBookContext } from "../context/BookContext";
import { useNavigate } from "react-router";


const AddBookForm = () =>{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [added, setAdded] = useState(false);
    const {addBooks} = useBookContext();
    const navigate = useNavigate();
    const handlerAddBook = () => {
        let newBook = {
            title,
            author
        }
        addBooks(newBook);
        setAdded(true)
        setTitle('');
        setAuthor('');
        setTimeout(() => {
            setAdded(false)
            navigate('/');
        }, 1000);
    }

    return (
            <div>
                <h2>Add Book</h2>
                <form action={handlerAddBook} method="post">
                    <div>
                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Book Title" />
                    </div>
                    <div>
                        <input type="text" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Book Author"/>
                    </div>  
                    <div>
                        <button style={{backgroundColor:'green', color:'white', margin: '3px'}} type="submit">Add Book</button>
                    </div>      
                    {added && (<label>Book added</label>)}              
                </form>
            </div>
        )
}

export default AddBookForm;