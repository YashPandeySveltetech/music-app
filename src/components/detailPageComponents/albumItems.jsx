import UnLikeIcon from 'assets/unLikeIcon'
import React from 'react'

function AlbumItems({index}) {
  return (
    <div className='flex justify-between py-[1rem]'><div className='flex gap-3'><span>{index+1}</span><span>Title</span></div><div>by Vishal Chandrashekhar  ·  10 Songs  ·  6,189,046 Plays  ·  31:33
    (P) 2022 Sony Music Entertainment India Pvt. Ltd.</div><div className='flex items-center gap-[1rem]'><span><UnLikeIcon size="1rem"/></span><span>4:00</span></div></div>
  )
}

export default AlbumItems