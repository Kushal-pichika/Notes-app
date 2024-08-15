import React from 'react'

const Overlay = () => {
    function open(){
        // let btn = document.getElementById("btn");
        let overlay = document.getElementById("overlay");
        overlay.style.top="-200%"
    }
  return (
    <div className='overlay' id='overlay'>
        <h1 className='lobster-regular head'>QuikNote</h1>
      <span className='btn' id='btn' onClick={open}>OPEN</span>
    </div>
  )
}

export default Overlay
