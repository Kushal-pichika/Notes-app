import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNote = ({handleAdd}) => {
    const [notetext, setnotetext] = useState("");

    const charlimit = 200;
    const handleChange=(e)=>{
        if(charlimit-e.target.value.length>=0){
            setnotetext(e.target.value);
        }
    }

    const handleSave=()=>{
        if(notetext.trim().length>0){
            handleAdd(notetext);
            setnotetext("");
        }
        if(notetext === ""){
            toast.warning("Cannot Save Empty Note!",{
                theme:"colored",
                position:"bottom-right"
            })
        }
        else{
            toast.success('Note Saved', {
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
        
        
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSave();
        }
      }
  return (
    <div className='new note'>
        <textarea className='add' onChange={handleChange} onKeyDown={handleKeyDown} value={notetext} name="newnote" id="" cols="10" rows="8" placeholder='Type to add a note...'></textarea>
        <div className='note-footer'>
            <small>{charlimit-notetext.length} Remaining</small>
            <ToastContainer/>
            <button className='save' onClick={handleSave}>Save</button>
        </div>
    </div>
  )
}

export default AddNote