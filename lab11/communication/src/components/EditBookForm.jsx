import { useEffect, useState } from "react";
import { useBookContext } from '../context/BookContext'
import { useLocation, useNavigate } from "react-router";

const EditBookForm = (props) =>{
    const location = useLocation();
    const navigate = useNavigate()
    console.log(location.state?.book, "from edit form")
    const {book} = props;
    const {updateBooks} = useBookContext();

    const [bookUpdate, setBookUpdate] = useState({title: '', author: '', id: ''});

    useEffect(() => {
        if (location.state?.book) {
            setBookUpdate(location.state.book);
        }
      }, [location.state]);

    const handlerEditBook = () => {
        updateBooks(bookUpdate);
        setBookUpdate({title: '', author: '', id: ''});
        navigate(-1)
    }

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setBookUpdate({ ...bookUpdate, [name]: value });
    }

    return (<div>
        <h2>Edit Book</h2>
        <form action={handlerEditBook} method="post">
            <div>
                <input type="text" value={bookUpdate.title} onChange={handlerChange} placeholder="Book Title" name="title"/>
            </div>
            <div>
                <input type="text" value={bookUpdate.author} onChange={handlerChange} placeholder="Book Author" name="author"/>
            </div>
            <button type="submit" style={{backgroundColor:'green', color:'white', margin: '3px'}}>Edit Book</button>
        </form>
    </div>)
}

export default EditBookForm;