import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Search = ({handleSearch}) => {
  return (
    <div className='search'>
        <IoSearchSharp size={'1.4em'} />
        <input onChange={(e)=>handleSearch(e.target.value)} type="search" placeholder='Search for your notes...' />
    </div>
  )
}

export default Search