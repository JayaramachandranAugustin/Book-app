import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../store";

import initialBookList from '../../data/book-list.json';

export interface BookType {
    id: number;
    name: string;
    author: string;
    year: string;
    cover: string;
  }
interface bookListState{
    bookList : BookType[];
    originalBookList : BookType []
}
const initialState: bookListState = {
    bookList : initialBookList,
    originalBookList : initialBookList
}
  

const bookListSlice = createSlice({
    name: "bookList",
    initialState,
    reducers: {
        addBookTolist: (state , action: PayloadAction<BookType>) => {
            const newBook : BookType = { ...action.payload, id: state.originalBookList.length + 1 }; 
            state.bookList.push(newBook);
            state.originalBookList.push(newBook);
        },
        filterBooks: (state, action: PayloadAction<string>) =>{
            if (!action.payload || action.payload === "") {
                state.bookList= state.originalBookList; 
              } else {
                const filteredBooks = state.originalBookList.filter((book) =>
                  book.name.toLowerCase().includes(action.payload.toLowerCase())
                );
                state.bookList = filteredBooks;
            }
        }
    }
  });


  export const { addBookTolist, filterBooks } = bookListSlice.actions;
  
  export const bookList = (state: RootState) => state.bookList.bookList;
  export const originalBookList = (state: RootState) => state.bookList.originalBookList;

  export default bookListSlice.reducer;