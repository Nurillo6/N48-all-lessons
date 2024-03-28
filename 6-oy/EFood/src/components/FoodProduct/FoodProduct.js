import React from 'react'
import { Clock, LineIcon } from '../../assets/Images/Icons'
import Button from '../Button/Button'

function FoodProduct({img, title, time}) {
  return (
    <li className='w-[361px] '>
        <img src={img} alt='Product img' width={"100%"} height={299}/>
        <div className='bg-white rounded-br-[30px] rounded-bl-[30px] p-[22px]'>
            <h3 className='font-bold text-[24px] mb-[14px]'>{title}</h3>
            <div className='flex items-center justify-between'>
                <div className='space-x-[10px] flex items-center'>
                    <Clock/>
                    <span>{time}</span>
                </div>
                <Button extraStyle={'w-[79px] flex items-center justify-center py-[10px] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[1px]'} isContent={true}>
                    <LineIcon/>
                </Button>
            </div>
        </div>
    </li>
  )
}

export default FoodProduct