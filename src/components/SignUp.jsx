import React, {useRef} from 'react'

const SignUp = () => {
  const handleSubmit=(e)=>{
      e.preventDefault();
      // alert("submitted")
      document.getElementById("details").style.right="-100%";
  }
return (
  <div id='details'>
      <h1 className='lobster-regular'>QUIKNOTE</h1>
      <form onSubmit={handleSubmit} action="">
          <input type="text" placeholder='Enter your name' required />
          <input type="email" placeholder='Enter your email' required />
          <input type="password" placeholder='Enter your password' required />
          <button className='submit'>Submit</button>
      </form>
  </div>
)
}

export default SignUp;




















// export default function SignUp() {
//     const name= useRef()
//     const email= useRef()
//     const password= useRef()
//   return (
//     <div>
//       <div className='conatiner'>
//         <div className='input_space'>
//             <input placeholder='Name' type="text" ref={name}/>
//         </div>
//         <div className='input_space'>
//             <input placeholder='email' type="text" ref={email}/>
//         </div>
//         <div className='input_space'>
//             <input placeholder='password' type="Password" ref={password}/>
//         </div>
//       </div>
//     </div>
//   )
// }
