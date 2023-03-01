import React from 'react'

function ResultList({heading="top result"}) {
  return (
    <div className='flex flex-col gap-[1rem] items-center'><div className='text-zinc-500'>{heading}</div>
    <div className='flex flex-col gap-[10px]'>{[1,1,1,1].map(()=><div className='flex'><img className='w-[3.5rem] h-[3.5rem]' src='/music-1.png'/><div>title</div></div>)}</div>
    </div>
  )
}

export default ResultList