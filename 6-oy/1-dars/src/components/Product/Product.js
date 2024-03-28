import React from 'react'

function Product({img, title, price}) {
  return (
    <li className='w-[208px] p-[20px] rounded-md flex flex-col items-center'>
        <img src={img} alt='Product Alt Img' width={144} height={144}/>
        <h2 className='text-[14px]'>{title}</h2>
        <strong>{price}</strong>
        <button className='w-[106px] py-[7px] bg-orange-500  text-white'>Add to Cart</button>
    </li>
  )
}

export default Product