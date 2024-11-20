import React, { useState } from 'react';
import './App.css';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import initialBookList from './data/book-list.json';
import AddBookModal from './components/AddBookModal';

export interface BookType {
  id: number;
  name: string;
  author: string;
  year: string;
  cover: string;
}

function App() {
  
  const[bookList, setBookList] = useState<BookType[]>(initialBookList);
  const[modalOpen, setModalOpen] = useState<boolean>(false);
  const [originalBooksList,setOriginalBooksList] = useState<BookType[]>([...bookList]);
  return (
    <>
      <NavBar originalBooksList={originalBooksList} setModalOpen={setModalOpen} setBookList={setBookList}/>
      <BookList bookList={bookList}/>
      <AddBookModal modalOpen={modalOpen} setModalOpen={setModalOpen} setBookList={setBookList} setOriginalBooksList ={setOriginalBooksList}/>
    </>
  );
}

export default App;


// Software Architecture: The Hard Parts
// Neal Ford & Mark Richards
// 2021
// https://m.media-amazon.com/images/I/81sdcxLtlwL._AC_UF1000,1000_QL80_.jpg