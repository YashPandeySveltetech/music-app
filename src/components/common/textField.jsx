import React from 'react'

function TextField({placeholder,handleChange,value}) {
  return (
   <input className='w-full hover:scale-110 px-[2rem] py-[1rem] rounded-full border-teal-200 focus:ring ring-teal-300 outline-teal-300 border focus:border-2 border-teal-200 my-[1rem]' 
   placeholder={placeholder}
   onChange={handleChange}
   value={value}
   />
  )
}

export default TextField