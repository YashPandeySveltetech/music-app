import LikeIcon from 'assets/likeIcon'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removeToFavouriteList } from 'redux/reducers/musicReducer'

function ListItem({icon,title,isLike=true,duration="02:30"}) {
  const dispatch=useDispatch()
  return (
    <div className='flex hover:bg-zinc-700/70  justify-between align-left items-center py-[5px] pr-[10px] pl-[1rem]'>
       <div className='w-[5rem] overflow-hidden'> <img className='w-[4rem] h-[4rem]' width={"60px"} height={"60px"} src={icon}/></div>
    <span><div className='w-[12rem]'>{title}</div>
    <div>{title}</div></span>
    <span onClick={()=>dispatch(removeToFavouriteList(icon))} className='text-red-600 hover:scale-110'><LikeIcon size="2rem"/></span>
    <span className='w-[3rem]'>{duration}</span>
    </div>
  )
}

export default ListItem