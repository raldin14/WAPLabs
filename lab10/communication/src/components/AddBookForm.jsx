import { useState } from "react";

const AddBookForm = (props) =>{
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handlerAddBook = (event) => {
        let newBook = {
            title,
            author
        }
        props.handlerAdd(newBook);
        setTitle('');
        setAuthor('');
        props.onCancel();
    }

    const cancel = () =>{
        setTitle('');
        setAuthor('');
        props.onCancel();
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
                        <button style={{backgroundColor:'red', color:'white', margin: '3px'}} onClick={cancel} type="submit">Cancel</button>
                    </div>                    
                </form>
            </div>
        )
}

export default AddBookForm;