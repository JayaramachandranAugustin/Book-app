import React, { ChangeEvent, useState } from 'react'
import '../styles/addbookmodal.css'
import { BookType } from '../App';
import initialBook from '../data/book.json';

type AddBookModalProps = {
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setBookList: React.Dispatch<React.SetStateAction<BookType[]>>;
    setOriginalBooksList: React.Dispatch<React.SetStateAction<BookType[]>>;
}


const AddBookModal:React.FC<AddBookModalProps> = ({modalOpen, setModalOpen, setBookList, setOriginalBooksList}: AddBookModalProps) => {

  const [formState, setFormState] = useState<BookType>(initialBook);

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

    setBookList((prevItems) => {
      const newBook = { ...formState, id: prevItems.length + 1 }; 
      const updatedList = [...prevItems, newBook]; 
      setOriginalBooksList(updatedList); 
      return updatedList;
    });

    setModalOpen(false);
  }

  
  return (
  <>
    { modalOpen && 
    <div className='modal-container'>
      <div className='modal-content'> 
        <div className='modal-header'>
          <h4>Add Book</h4>
          <button className='close-button' onClick={()=>setModalOpen(false)}>X</button>
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