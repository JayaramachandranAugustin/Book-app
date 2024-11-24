import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchQuote = createAsyncThunk<
  string, // Fulfilled return type
  void, // Thunk argument type
  { rejectValue: string } 
>('quotes/fetchQuote', async (_, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:3001/quote');
    return response.data.quote;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export enum Status {
  IDLE,
  LOADING,
  SUCCEEDED,
  FAILED,
}

export interface QuoteResponse {
  quote: string;
  status: Status;
  error: string | null;
}

const initialState: QuoteResponse = {
  quote: '',
  status: Status.IDLE,
  error: null,
};

const quoteSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = Status.LOADING;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = Status.SUCCEEDED;
        state.quote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = Status.FAILED;
        state.error = action.payload ?? 'Something went wrong';
      });
  },
});


export const quoteState = (state:RootState) => state.quote;

export default quoteSlice.reducer;
