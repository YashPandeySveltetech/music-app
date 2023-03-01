import CustomButton from 'components/common/customButton'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFavouriteList } from 'redux/reducers/musicReducer'
import ListItem from './listItem'

function FavouriteListModal() {
  // const favList=[{title:"movie-1",icon:"/movie-1.jfif"},
  // {title:"movie-2",icon:"/movie-2.jfif"},
  // {title:"movie-3",icon:"/movie-3.jfif"},
  // {title:"movie-4",icon:"/movie-4.jfif"},
  // {title:"movie-5",icon:"/movie-5.jfif"},
  // {title:"movie-6",icon:"/movie-6.jfif"},
  // {title:"movie-7",icon:"/movie-7.jfif"},
  // {title:"movie-2",icon:"/movie-8.jfif"},
  // {title:"movie-3",icon:"/movie-9.jfif"},
  // {title:"movie-4",icon:"/movie-10.jfif"},
  // {title:"movie-5",icon:"/movie-11.jfif"},
  // {title:"movie-6",icon:"/movie-12.jfif"},
  // {title:"movie-7",icon:"/movie-13.jfif"},{title:"movie-1",icon:"/movie-1.jfif"},
  // {title:"movie-2",icon:"/movie-14.jfif"},
  // {title:"movie-3",icon:"/movie-15.jfif"},
  // {title:"movie-4",icon:"/movie-16.jfif"},
  // {title:"movie-5",icon:"/movie-17.jfif"},
  // {title:"movie-6",icon:"/movie-18.jfif"},
  // {title:"movie-1",icon:"/movie-1.jfif"},
  // {title:"movie-2",icon:"/movie-8.jfif"},
  // {title:"movie-3",icon:"/movie-9.jfif"},
  // {title:"movie-4",icon:"/movie-10.jfif"},
  // {title:"movie-5",icon:"/movie-11.jfif"},
  // {title:"movie-6",icon:"/movie-12.jfif"},
  // {title:"movie-7",icon:"/movie-13.jfif"},{title:"movie-1",icon:"/movie-1.jfif"},
  // {title:"movie-2",icon:"/movie-14.jfif"},
  // {title:"movie-3",icon:"/movie-15.jfif"},
  // {title:"movie-4",icon:"/movie-16.jfif"},
  // {title:"movie-5",icon:"/movie-17.jfif"},
  // {title:"movie-6",icon:"/movie-18.jfif"},
  // {title:"movie-7",icon:"/movie-1.jfif"},{title:"movie-1",icon:"/movie-1.jfif"},
  // {title:"movie-2",icon:"/movie-2.jfif"},
  // {title:"movie-3",icon:"/movie-3.jfif"},
  // {title:"movie-4",icon:"/movie-4.jfif"},
  // {title:"movie-5",icon:"/movie-5.jfif"},
  // {title:"movie-6",icon:"/movie-6.jfif"},
  // {title:"movie-7",icon:"/movie-7.jfif"}]
  const {favList}=useSelector((state)=>state.music)
  useEffect(()=>{
    console.log(favList,'favList');
  },[favList])
  const dispatch=useDispatch()
  return (
    <div className="bg-cover  text-white ">
      <div className='right-0 bg-zinc-900/90 rounded-[0.7rem] right-0 top-[20%] overflow-x-hidden fixed w-[28rem] hover:translate-x-[0rem] translate-x-[22rem] transition ease-linear delay-400 py-[0.5rem]  px-[1rem] pl-[0px] overflow-scroll text-semibold cursor-pointer shadow-2xl shadow-teal-300'>
    <div className='sticky top-0  flex justify-between items-center'><span className='font-semibold pl-[1rem]	'>Favourite</span><div className='flex gap-9'> <CustomButton color="red-300" handleClick={()=>dispatch(clearFavouriteList())}  btn_name="Clear"/><CustomButton color="teal-300" border="true"  btn_name="Save"/></div>   
</div>
   
  
   {favList.length?<>  <div className='right-0   overflow-x-hidden  overflow-scroll text-semibold cursor-pointer'>
    <div className='max-h-[24rem]'>{favList.map((item)=><ListItem icon={item.icon} title={item.title}/>)} </div>
    </div>
</>:<div className='text-center'>No Data</div>} 
   
    </div>
    </div>
  )
}

export default FavouriteListModal