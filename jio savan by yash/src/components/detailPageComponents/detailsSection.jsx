import ThreeDotIcon from 'assets/threeDotIcon'
import UnLikeIcon from 'assets/unLikeIcon'
import CustomButton from 'components/common/customButton'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { setMusic } from 'redux/reducers/musicReducer';

function DetailsSection() {
    const { state } = useLocation();
    const { src = "",music_url="" } = state || {};
    const dispatch=useDispatch()
  return (
    <div className='flex gap-[4rem]'><div ><img className='w-[15rem] h-[15rem]' src={`${src}`}/></div>
    <div className='flex flex-col justify-center'> 
        <span className='text-[2.5rem] text-zinc-600 font-bold '>Music title</span>
        <span className='w-[25rem]'>by Vishal Chandrashekhar  ·  10 Songs  ·  6,189,046 Plays  ·  31:33
(P) 2022 Sony Music Entertainment India Pvt. Ltd.</span>
        <div className='flex items-center gap-[2rem] mt-[1rem]'><CustomButton handleClick={()=>                dispatch(setMusic(music_url))
} color='teal-300' border="true" btn_name='Play'/><span className='border border-zinc-500 rounded-full p-[0.5rem] cursor-pointer'><UnLikeIcon size="1.5rem"/></span><span className='border border-zinc-500 rounded-full p-[0.5rem] cursor-pointer'><ThreeDotIcon size="1.5rem"/></span></div>
    </div></div>
  )
}

export default DetailsSection