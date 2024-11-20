import React from 'react';
import '../styles/booklist.css'; 
import Book from './Book';
import { BookType } from '../App';

type BookListProps = {
  bookList: BookType[];
}


const BookList: React.FC<BookListProps> = ({ bookList }:BookListProps) => {
  return (
    <div className="book-list-container">
      {bookList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;