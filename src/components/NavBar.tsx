import React from 'react'
import SearchBook from './SearchBook'
import AddBook from './AddBook'
import '../styles/navbar.css'
import { BookType } from '../App';

type NavBarProps = {
  setBookList: React.Dispatch<React.SetStateAction<BookType[]>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  originalBooksList: BookType[];
}

const NavBar:React.FC<NavBarProps> = ({setBookList, setModalOpen, originalBooksList}: NavBarProps) => {
  return (
    <div className='navbar-container'>
        <SearchBook originalBooksList={originalBooksList} setBookList={setBookList}/>
        <AddBook setModalOpen={setModalOpen}/>
    </div>
  )
}

export default NavBar