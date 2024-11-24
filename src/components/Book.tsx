import React from 'react';
import '../styles/book.css'; 
import { BookType } from '../state/slices/bookListSlice';

type BookProps = {
    book:BookType
}

const Book: React.FC<BookProps> =  ({ book: { cover, name, year } }: BookProps) => {
  return (
    <div className='book-container'>
        <img className='book-cover' src={cover} alt={name}/>
        <h4 className='book-title'>{name}</h4>
        <p className='published-on'>Year Published : {year}</p>
    </div>
  )
}

export default Book;