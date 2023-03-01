import React from 'react'
import ResultList from './resultList'

function ResultScreen({results}) {
  return (
    <div className='flex justify-between px-[2rem]'>
        <ResultList heading='Top Result' />
        <ResultList heading='Songs' />
        <ResultList heading='Albums' />
        <ResultList heading='Artist'/>

    </div>
  )
}

export default ResultScreen