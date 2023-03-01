import ConfirmationIcon from 'assets/confirmationIcon'
import SearchIcon from 'assets/searchIcon'
import React from 'react'
import { useState } from 'react'
import ResultScreen from './resultScreen'

function SearchBar({placeholder="search"}) {
  const [isExpand,setIsExpand]=useState(false)
  const favList=[{music_url:"/musics/besharam.mp3",title:"movie-1",icon:"/movie-1.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-2",icon:"/movie-2.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-3",icon:"/movie-3.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-4",icon:"/movie-4.jfif"},
  {music_url:"/musics/maan.mp3",title:"movie-5",icon:"/movie-5.jfif"},
  {music_url:"/musics/besharam.mp3",title:"movie-6",icon:"/movie-6.jfif"},
  {music_url:"/musics/jhoome.mp3",title:"movie-7",icon:"/movie-7.jfif"}]

  return (
    <>
    <div >
   <div  className={` ${isExpand?' fixed z-50 left-[14%] mt-[1rem] top-[-1.5%] rounded ':"fixed z-20 mt-2 left-[34%] "}`}>
    <div   className={`${isExpand?' rounded   bg-zinc-900/90 text-white w-[70rem] p-[1rem]':" w-[30rem]"}`}> 
   <div  className='flex items-center'>
   {isExpand&&<div className='text-teal-300'> <SearchIcon size='1.5rem'/></div>}
    <input onClick={()=>{
      setIsExpand(true)
      }
      } className={`px-[2rem]  ${isExpand?' border-b  ':"border rounded-full"} py-[1rem] w-full  border-teal-200  outline-none   	 border-teal-200 my-[.23rem]`} placeholder={placeholder}/>
{isExpand&&<div onClick={()=>{
      setIsExpand(false)
      console.log('click');
      }} className='text-red-500 cursor-pointer'><ConfirmationIcon size="2rem"/></div>}
</div>
{isExpand&&<><ResultScreen results={favList}/>
</>}
</div>
</div>
    </div>
    {isExpand&&<div className="opacity-80 fixed inset-0 z-40 bg-black"></div>}
 </> )  
}

export default SearchBar