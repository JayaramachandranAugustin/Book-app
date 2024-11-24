import React from 'react';
import './App.css';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import AddBookModal from './components/AddBookModal';

function App() {
  return (
    <>
      <NavBar/>
      <BookList />
      <AddBookModal/>
    </>
  );
}

export default App;


// Software Architecture: The Hard Parts
// Neal Ford & Mark Richards
// 2021
// https://m.media-amazon.com/images/I/81sdcxLtlwL._AC_UF1000,1000_QL80_.jpg