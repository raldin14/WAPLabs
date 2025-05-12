import { Link, Outlet } from "react-router"

export const Library = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh',
            justifyContent: 'center'
        }}>
            <header>
                <h1>Library</h1>
                <nav style={{
                    margin: '10px',
                    fontSize: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '40px'
                }}>
                    <Link to="/">Home</Link>
                    <Link to="/addbook">Add Book</Link>
                </nav>
            </header>
            <main  style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '50vh', // or any height you need
                textAlign: 'center'
            }}>
                <section><Outlet /></section>
            </main>
            <footer>List of all books</footer>
        </div>
    );
}