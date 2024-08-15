import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Note = ({id, text, date, handleDelete, handleEdit}) => {

  const [edit, setedit] = useState(false);
  const [newText, setnewText] = useState(text)
 const del=()=>{
    toast.error('Note Deleted', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

 }

 const charlimit = 200
 const handleChange =(e)=>{
      if(charlimit-e.target.value.length>=0)
      setnewText(e.target.value);
 }

 const editNew = (id,text)=>{
  if(!text){
    toast.error('Note Cannot be empty', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    }

    )
  }
  else{
  handleEdit(id,text);
  toast.info('Note Updated', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
    setedit(false)
 }
}


const handleKeyDown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    editNew(id, newText);
  }
};

  
  return (
    <div className='note'>
      {!edit ? <span>{text}</span> : <textarea onKeyDown={handleKeyDown} cols="10" rows="8" placeholder='Edit your note here.....' className='edit-area' onChange={handleChange} value={newText}></textarea>}
        
        <div className='note-footer'>
            {edit? <small>{charlimit-newText.length} Remaining</small>:<small>{date}</small>}
            {
              !edit ? <div className='icons'>
            <FaRegEdit title='Edit note' className='edit' onClick={()=>{setedit(true)}} size={"1em"} />
            <MdDeleteForever onClick={() => {handleDelete(id); del();}} className='delete' size={"1.2em"} />
            </div> : <div className='icons'>
            <FaSave title='Update note' id='save'  tabIndex={0} onClick={()=>{editNew(id,newText)}} size={"1.2em"}/>
              </div>
              
              }

        </div>
    </div>
  )
}

export default Note