import React from 'react'

function StayHomeCom({img, title}) {
  return (
    <div className='flex items-center space-x-[25px]'>
        <img src={img} width={34} height={34} alt='Icon Stay Home'/>
        <span className='text-[24px]'>{title}</span>
    </div>
  )
}

export default StayHomeCom