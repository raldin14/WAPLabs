import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BookProvider } from './context/BookContext.jsx'
import {BrowserRouter} from 'react-router';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BookProvider>
        <App/>
      </BookProvider>
    </BrowserRouter>    
  </StrictMode>,
)
