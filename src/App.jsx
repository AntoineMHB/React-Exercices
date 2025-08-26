import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button'
import { BookList } from './components/BookList'
import Book from './components/Book'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import Home from './Pages/Home'


function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/books" element={<BookList />}/>
        <Route path="/books/:id" element={<Book />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
