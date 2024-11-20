import React, { useState } from 'react';
import '../styles/searchbook.css'
import { BookType } from '../App';

type SearchBookProps = {
  setBookList: React.Dispatch<React.SetStateAction<BookType[]>>;
  originalBooksList: BookType[];
}
const SearchBook:React.FC<SearchBookProps> = ({ setBookList, originalBooksList }: SearchBookProps) => {

  const [searchString, setSearchString] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchString(query);

    if (query === "") {
      setBookList(originalBooksList); 
    } else {
      const filteredBooks = originalBooksList.filter((book) =>
        book.name.toLowerCase().includes(query.toLowerCase())
      );
      setBookList(filteredBooks);
    }
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