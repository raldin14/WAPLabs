import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BookProvider } from './context/BookContext.jsx'
import {HashRouter} from 'react-router';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename="/WAPLabs/lab11/communication/dist_lab11">
      <BookProvider>
        <App/>
      </BookProvider>
    </HashRouter>    
  </StrictMode>,
)
