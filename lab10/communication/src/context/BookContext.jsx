import { createContext, useContext, useEffect, useState } from "react";

const BookContext = createContext(null);

export const BookProvider = ({children}) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        getAllBooks();
    }, []);
    
    const getAllBooks = async () => {
        try {
            setLoading(true);
            let resBook = await fetch('https://67d17ef590e0670699ba5929.mockapi.io/books');
            if (resBook.ok) {
                let json = await resBook.json();
                setBooks(json);
                setError(null);
            } else {
                setError(" HTTP-Error : " + resBook.status);
            }
        } catch (error) {
            setError("Fetch Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };
    
    const addBooks = async (newBook) => {
        try {
            setLoading(true);
            const res = await fetch('https://67d17ef590e0670699ba5929.mockapi.io/books', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newBook)
            });
            if (res.ok) {
                await getAllBooks();
            }
        } catch (error) {
            setError("Add Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };
    
    const updateBooks = async (book) => {
        try {
            setLoading(true);
            const res = await fetch(`https://67d17ef590e0670699ba5929.mockapi.io/books/${book.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(book)
            });
            if (res.ok) {
                await getAllBooks();
            }
        } catch (error) {
            setError("Update Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };
    
    const deleteBooks = async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`https://67d17ef590e0670699ba5929.mockapi.io/books/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                await getAllBooks();
            }
        } catch (error) {
            setError("Delete Error: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <BookContext.Provider value={{books, addBooks, updateBooks, deleteBooks, loading, error }}>
            {children}
        </BookContext.Provider>
    );
};

export const useBookContext = () => useContext(BookContext);
