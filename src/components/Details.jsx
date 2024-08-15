import React from 'react'

const Details = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        // alert("submitted")
        document.getElementById("details").style.left="-100%"
    }
  return (
    <div id='details'>
        <h1 className='lobster-regular'>QUIKNOTE</h1>
        <form onSubmit={handleSubmit} action="">
            <input type="text" placeholder='Enter your name' required />
            <input type="email" placeholder='Enter your email' required />
            <button className='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Details