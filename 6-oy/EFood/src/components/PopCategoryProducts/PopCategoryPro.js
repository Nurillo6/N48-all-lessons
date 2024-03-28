import React from 'react'
import Button from '../Button/Button'
import { Star } from '../../assets/Images/Icons'

function PopCategoryPro({img, title, price, btnTitle}) {

    return (
        <li className='flex flex-col items-center w-[208px] bg-white pb-[22px] rounded-md'>
            <img src={img} alt='Cheese burget' width={144} height={144} />
            <h3 className='mb-[9px]'>{title}</h3>
            <strong className='mb-[11px]'>{price}</strong>
            <Button title={btnTitle} extraStyle={'w-[106px] py-[7px] rounded-none'} />
        </li>
    )
}

export default PopCategoryPro