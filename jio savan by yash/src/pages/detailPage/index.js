import AlbumItems from 'components/detailPageComponents/albumItems'
import DetailsSection from 'components/detailPageComponents/detailsSection'
import React from 'react'

function DetailPage() {
  return (
    <div className=''><DetailsSection/>
    <div className='mt-[5rem]'>
   {[1,2,3,4,5,6].map((item,key)=><AlbumItems index={key}/>)} 
    </div>
    </div>
  )
}

export default DetailPage