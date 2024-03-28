import React from 'react'
import PopCategoryNavBtn from '../PopCategoryProducts/PopCategoryNavBtn'
import PopCategoryPro from '../PopCategoryProducts/PopCategoryPro'
import {BurgerIcon, PizzaIcon} from "../../assets/Images/Icons"
import Cheeseburger from "../../assets/Images/Cheeseburger.svg"
import Beafburger from "../../assets/Images/Beefburger.svg"

function PopularCategory() {
  return (
    <section className='py-[94px]'>
        <div className='container mx-auto'>
            <h2 className='text-center text-[36px] font-bold'>Our popular <span className='text-orange-500'>Category</span> </h2>
            <ul className='flex items-center justify-center space-x-[26px] pt-[55px] pb-[39px]'>
                <PopCategoryNavBtn title={"Burger"}>
                    <BurgerIcon/>
                </PopCategoryNavBtn>
                <PopCategoryNavBtn title={"Pizza"}>
                    <PizzaIcon/>
                </PopCategoryNavBtn>
                <PopCategoryNavBtn title={"Pizza"}>
                    <PizzaIcon/>
                </PopCategoryNavBtn>
                <PopCategoryNavBtn title={"Pizza"}>
                    <PizzaIcon/>
                </PopCategoryNavBtn>
                <PopCategoryNavBtn title={"Pizza"}>
                    <PizzaIcon/>
                </PopCategoryNavBtn>
            </ul>
            <ul className='flex justify-center space-x-[29px]'>
               <PopCategoryPro img={Cheeseburger} title={"Cheeseburger With Salad"} price={"$18.00"} btnTitle={"Add to Cart"}/>
               <PopCategoryPro img={Beafburger} title={"Beef Burger"} price={"$15.00"} btnTitle={"Add to Cart"}/>
               <PopCategoryPro img={Beafburger} title={"Beef Burger"} price={"$15.00"} btnTitle={"Add to Cart"}/>
               <PopCategoryPro img={Beafburger} title={"Beef Burger"} price={"$15.00"} btnTitle={"Add to Cart"}/>
               <PopCategoryPro img={Beafburger} title={"Beef Burger"} price={"$15.00"} btnTitle={"Add to Cart"}/>
            </ul>
        </div>
    </section>
  )
}

export default PopularCategory