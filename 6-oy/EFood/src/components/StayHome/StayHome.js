import React from 'react'
import StayImg from "../../assets/Images/StayImg.png"
import StayHomeCom from '../StayHomeCom/StayHomeCom'
import TimeIcon from "../../assets/Images/TimeIcon.svg"
import Button from '../Button/Button'

function StayHome() {
  return (
    <section className='pt-[89px] pb-[128px]'>
        <div className='container mx-auto flex items-center justify-between'>
            <img src={StayImg} width={626} height={723} alt='Stay Home Img'/>
            <div className='w-[449px]'>
                <h2 className='font-semibold text-[36px]'><span className='text-orange-500'>Stay</span> at home, we will Provide good <span className='text-orange-500'>food</span></h2>
                <p className='text-[20px] mt-[30px]'>We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>
                <div className='space-y-[22px] mt-[14px]'>
                    <StayHomeCom img={TimeIcon} title={"Fasted delivery in 30 Minutes"}/>
                    <StayHomeCom img={TimeIcon} title={"Fasted delivery in 30 Minutes"}/>
                    <StayHomeCom img={TimeIcon} title={"Fasted delivery in 30 Minutes"}/>
                </div>
                <Button extraStyle={'w-[176px] rounded-tr-[30px] rounded-tl-[30px] rounded-bl-[30px] rounded-br-[1px] py-[17px] mt-[49px]'} title={"See more"}/>
            </div>
        </div>
    </section>
  )
}

export default StayHome