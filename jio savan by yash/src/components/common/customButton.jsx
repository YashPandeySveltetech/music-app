import React from 'react'

function CustomButton({btn_name="button",handleClick,icon,isDisable,border,color}) {
  console.log(color,'color');
  return (
    <button className={`font-semibold flex items-center my-[1rem]  hover:scale-110 hover:text-teal-300 hover:text-teal-300  ${color?`text-${color} hover:text-${color} hover:bg-${color}`:""}  ${isDisable?'cursor-not-allowed':"cursor-pointer"} ${border?`border-2 hover:text-white px-[1rem] border-teal-300 rounded-full hover:bg-teal-300  py-[0.5rem]`:""}`}
    onClick={handleClick}
    disabled={isDisable}
     ><span className='mr-[0.5rem]'>{icon}</span>{btn_name}</button>
  )
}

export default CustomButton