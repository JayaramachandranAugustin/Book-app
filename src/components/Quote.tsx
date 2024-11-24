import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuote, QuoteResponse, quoteState, Status } from '../state/slices/quotesSlice';
import { AppDispatch } from '../state/store';
import '../styles/quote.css'

type QuoteProps = {

}

const Quote:React.FC<QuoteProps> = (props: QuoteProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { quote, status, error }: QuoteResponse = useSelector(quoteState);

    useEffect(() => {
        dispatch(fetchQuote());
    }, [dispatch]);

    return (
        <div className='quote-container'>
            {status === Status.LOADING && <p>Loading...</p>}
            {status === Status.SUCCEEDED && <p>"{quote}"</p>}
            {status === Status.FAILED && <p>Error: {error}</p>}
        </div>
    );
};

export default Quote;
