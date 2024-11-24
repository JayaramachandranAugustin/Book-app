import React, { ChangeEvent, useState } from 'react'
import '../styles/addbookmodal.css'
import initialBook from '../data/book.json';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../state/store';
import { closeAddModal, openModalFlag } from '../state/slices/addModalSlice';
import { addBookTolist, BookType } from '../state/slices/bookListSlice';

type AddBookModalProps = {
}


const AddBookModal:React.FC<AddBookModalProps> = (props: AddBookModalProps) => {

  const [formState, setFormState] = useState<BookType>(initialBook);
  const openModal = useSelector(openModalFlag);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () =>{
    setFormState(initialBook);
  }

  const addBook = () =>{

    
    const newBook = { ...formState, id: 0}; 

    dispatch(addBookTolist(newBook))
    dispatch(closeAddModal());
  }

  
  return (
  <>
    { openModal && 
    <div className='modal-container'>
      <div className='modal-content'> 
        <div className='modal-header'>
          <h4>Add Book</h4>
          <button className='close-button' onClick={()=>dispatch(closeAddModal())}>X</button>
        </div>
        <div className='modal-form'>
            <div className='form-element'>
              <div className='element-name'>Name</div>
              <input className='element-input' 
                      value={formState.name} type='text' name='name' onChange={handleChange}/>
            </div>
            <div className='form-element'>
              <div className='element-name'>Author</div>
              <input className='element-input' type='text' name='author' onChange={handleChange}/>
            </div>
            <div className='form-element'>
              <div className='element-name'>Year</div>
              <input className='element-input' type='text' name='year' onChange={handleChange}/>
            </div>
            <div className='form-element'>
              <div className='element-name'>Cover image</div>
              <input className='element-input' type='text' name='cover' onChange={handleChange}/>
            </div>
            <div className='action-buttons'>
              <button onClick ={resetForm} className='reset-button'>Reset</button>
              <button onClick ={addBook} className='add-book-button'>Add</button>
            </div>

        </div>
      </div>
    </div>}
 </>
  )
}
export default AddBookModal;