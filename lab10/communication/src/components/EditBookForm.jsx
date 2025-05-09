import { useEffect, useState } from "react";
import { useBookContext } from '../context/BookContext'

const EditBookForm = (props) =>{
    console.log(props.book, "from edit form")
    const {book} = props;
    const {updateBooks} = useBookContext();

    const [bookUpdate, setBookUpdate] = useState({title: '', author: '', id: ''});

    useEffect(() => {
        if (book) {
            setBookUpdate(book);
        }
      }, [book]);

    const handlerEditBook = () => {
        updateBooks(bookUpdate);
        setBookUpdate({title: '', author: '', id: ''});
        props.onCancel();
    }

    const handlerChange = (e) => {
        const { name, value } = e.target;
        setBookUpdate({ ...book, [name]: value });
    }

    const cancel = () =>{
        setBookUpdate({title: '', author: '', id: ''});
        props.onCancel();
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
            <button type="submit" style={{backgroundColor:'red', color:'white', margin: '3px'}} onClick={cancel}>Cancel</button>
        </form>
    </div>)
}

export default EditBookForm;