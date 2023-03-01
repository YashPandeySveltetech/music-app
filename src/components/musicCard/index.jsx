import LikeIcon from 'assets/likeIcon'
import PauseIcon from 'assets/pauseIcon'
import PlayIcon from 'assets/playIcon'
import ThreeDotIcon from 'assets/threeDotIcon'
import UnLikeIcon from 'assets/unLikeIcon'
import DropdownComponent from 'components/common/dropdown'
import React, { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addTohistory } from 'redux/reducers/historyReducer'
import { addToFavouriteList, removeToFavouriteList, setMusic } from 'redux/reducers/musicReducer'

function MusicCard({src,music_url,item}) {
    const [toggle,setToggle]=useState(false)
    const [showdropDown,setShowDropdown]=useState(false)
    const dispatch=useDispatch()
    const {favList}=useSelector((state)=>state.music)
    const checkLike=useCallback((id)=>{
      let index=favList.findIndex((arrow) => arrow.icon === id)
      console.log(index,id,'index');
      if(index>=0){
        return true
      }
      else {
        return false
      }
    },[favList.length])
  return (
    <div onMouseLeave={()=>setShowDropdown(false)} className='w-[10rem] h-[13rem] cursor-pointer rounded-[1rem] '>
     <Link to={`/details/1`} state={{ src: src,music_url:music_url }}> 
       <div style={{backgroundImage: `url(${src})`, backgroundSize: 'cover'}} className='w-full h-[10rem] bg-cover")] rounded'>
       <DropdownComponent setShowDropdown={setShowDropdown} show={showdropDown} icon />
            <div className='justify-center bg-slate-900/40 gap-[1.5rem] w-full h-full items-center flex-col text-white flex opacity-0 hover:opacity-100 '>
            <div className='h-[6rem]'></div> 
              <div className='bg-zinc-900/70 w-[3rem] h-[3rem]  p-[0.3rem]  rounded-full hover:scale-150 ' onClick={(event)=>{       
                dispatch(addTohistory(item))
                dispatch(setMusic(music_url))
                event.preventDefault();
                return }}><PlayIcon  size={40}/></div>
              
            <div className='  w-full h-full justify-between p-[.6rem] pb-[0px]  flex opacity-100 text-white hover:opacity-100 '>
            <div className='flex  items-center'> <div>
        <div className='z-10' onClick={(event)=>{
          setToggle(!toggle)
          event.preventDefault();
    return 
         }}>{checkLike(item.icon)?<div onClick={()=>dispatch(removeToFavouriteList(item.icon))} ><LikeIcon size="1.5rem"/></div>:<div onClick={()=>dispatch(addToFavouriteList(item))}><UnLikeIcon  size="1.5rem"/></div>}</div>
                
                </div></div>
            <div className='flex items-center'>  <div>
         <div className='' onClick={(event)=>{
          setShowDropdown(!showdropDown)
          event.preventDefault();
    return 
       }}><ThreeDotIcon o size="1.5rem"/></div>
             
                </div></div>
        
        </div>
         </div>
         

        </div>
        </Link>
        <div className='leading-4 p-[5px] '>
        <div className='flex justify-center'>  <div className='text-center whitespace-nowrap font-semibold text-ellipsis overflow-hidden'>Title of the music file</div></div>
      <div className='flex justify-center'> <div className='text-center whitespace-nowrap text-zinc-400  text-ellipsis overflow-hidden'>Music descriptionsdsdsdsdasdasd</div></div> 
        </div>
     
    </div>
  )
}

export default MusicCard