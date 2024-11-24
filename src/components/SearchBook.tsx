import React, { useState } from 'react';
import '../styles/searchbook.css'
import { useDispatch } from 'react-redux';
import { filterBooks } from '../state/slices/bookListSlice';
import { AppDispatch } from '../state/store';

type SearchBookProps = {
}
const SearchBook:React.FC<SearchBookProps> = (props : SearchBookProps) => {

  const [searchString, setSearchString] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchString(query);
    dispatch(filterBooks(query));
  };


  return ( 
  <div className="search-container">
    <div className="search-bar">
      <input type="text" value={searchString} placeholder="Search..." onChange={handleSearch}/>
    </div>
  </div>
  )
}

export default SearchBook