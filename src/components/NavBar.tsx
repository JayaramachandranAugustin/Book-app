import React from 'react'
import SearchBook from './SearchBook'
import AddBook from './AddBook'
import '../styles/navbar.css'
import { AppDispatch } from '../state/store'
import { useDispatch } from 'react-redux'
import { fetchQuote } from '../state/slices/quotesSlice'

type NavBarProps = {
}

const NavBar:React.FC<NavBarProps> = (props: NavBarProps) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className='navbar-container'>
        <SearchBook/>
        <AddBook/>
        <button className='get_quote' onClick={() => dispatch(fetchQuote())}>Fetch New Quote</button>
    </div>
  )
}

export default NavBar