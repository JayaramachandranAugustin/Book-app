import React from 'react'
import SearchBook from './SearchBook'
import AddBook from './AddBook'
import '../styles/navbar.css'

type NavBarProps = {
}

const NavBar:React.FC<NavBarProps> = (props: NavBarProps) => {
  return (
    <div className='navbar-container'>
        <SearchBook/>
        <AddBook/>
    </div>
  )
}

export default NavBar