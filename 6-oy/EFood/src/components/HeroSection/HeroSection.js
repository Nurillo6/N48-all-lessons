import React from 'react'
import Button from "../Button/Button"
import HeroImg from "../../assets/Images/Hero-img.png"

function HeroSection() {
  return (
    <section className='py-[60px]'>
    <div className='container mx-auto flex items-center justify-between'>
        <div className='w-[513px]'>
            <h2 className='font-bold mb-[23px] text-[66px]'>Super fast <span className='text-orange-500'>Food delivery</span> service</h2>
            <p className='mb-[44px] text-[23px]'>We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
            <div className='flex items-center space-x-[30px]'>
                <Button extraStyle={`py-[13px] w-[163px]`} title={"Explore Food"}/>
                <a className='underline decoration-1' href='#'>Download App</a>
            </div>
        </div>
        <img src={HeroImg} alt='Hero IMg' />
    </div>
</section>
  )
}

export default HeroSection