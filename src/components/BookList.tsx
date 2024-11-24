import React from 'react';
import '../styles/booklist.css'; 
import Book from './Book';
import { useSelector } from 'react-redux';
import { bookList } from '../state/slices/bookListSlice';

type BookListProps = {
}


const BookList: React.FC<BookListProps> = (props:BookListProps) => {
  const bookListState = useSelector(bookList);
  return (
    <div className="book-list-container">
      {bookListState.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;