import DownArrowIcon from 'assets/downArrowIcon';
import UpArrowIcon from 'assets/upArrowIcon';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

function MusicPlayer({}) {
  const {music}=useSelector((state)=>state.music)
  console.log(music,"music");
  useEffect(()=>{console.log(music);},[music])
const header=()=><h1 className='text-teal-300'>{music}</h1>
const [show,setShow]=useState(true)
  return (
    <>
   {music&& <div className='flex w-[2rem] m-auto justify-center'><div onClick={()=>setShow(!show)} className='bg-black/70 hover:text-teal-300 rounded-t-lg cursor-pointer text-white px-4 py-2'>{show?<div><DownArrowIcon size="15px"/></div>:<div ><UpArrowIcon size="15px"/></div>}</div></div>
}    <div className='w-full'>
   {show? <AudioPlayer
    // autoPlay
    loop
    src={music}
    // muted={true}
    showSkipControls
    showFilledVolume
    header={music&&<>{<div >{show?<div  data-aos="zoom-in"  className='flex items-center gap-4 justify-center'><img className='w-[3rem] h-[3rem]' src='/music-1.png'/><h1 className='text-teal-300'>{music}</h1></div>:""}</div>}</>}
    customIcons="/music-1.png"
    onPlay={e => console.log("onPlay")}
    // other props here
  />:""}
  </div>
  </>
  )
}

export default MusicPlayer