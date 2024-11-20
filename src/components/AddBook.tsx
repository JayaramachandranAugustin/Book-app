import React from 'react'
import '../styles/addbook.css'

type AddBookProps = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddBook:React.FC<AddBookProps> = ({setModalOpen}: AddBookProps) => {

  return (
    <>
    <div className='add-container'>
       <button className='add-button' onClick={()=>setModalOpen(true)}>Add Book</button>
    </div>
    </>
  )
}

export default AddBook