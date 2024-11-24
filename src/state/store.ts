import { configureStore } from "@reduxjs/toolkit";
import addModalSlice from './slices/addModalSlice';
import bookListSlice from './slices/bookListSlice';
import quoteSlice from './slices/quotesSlice';



export const store = configureStore({
    reducer: {
        addModal: addModalSlice,
        bookList: bookListSlice,
        quote: quoteSlice
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;