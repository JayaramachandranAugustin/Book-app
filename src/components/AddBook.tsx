import React from 'react'
import '../styles/addbook.css'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../state/store'
import { openAddModal } from '../state/slices/addModalSlice'

type AddBookProps = {
}

const AddBook:React.FC<AddBookProps> = (props: AddBookProps) => {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
    <div className='add-container'>
       <button className='add-button' onClick={() => dispatch(openAddModal())}>Add Book</button>
    </div>
    </>
  )
}

export default AddBook