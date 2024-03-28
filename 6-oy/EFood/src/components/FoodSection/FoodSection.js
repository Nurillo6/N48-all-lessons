import React from 'react'
import FoodProduct from '../FoodProduct/FoodProduct'
import Blaze from "../../assets/Images/Blaze.png"
import PizzaRange from "../../assets/Images/PizzaRange.png"
function FoodSection() {
  return (
    <section>
        <div className='container mx-auto'>
            <h2 className='text-[36px] font-bold text-center mb-[50px]'>Top Food <span className='text-orange-500'>Restaurant</span></h2>
            <ul className='flex justify-between gap-[43px] flex-wrap'>
                <FoodProduct img={Blaze} title={"Blaze Pizza"} time={"11.00 AM - 10.00 PM"}/>
                <FoodProduct img={PizzaRange} title={"Pizza Ranch"} time={"09.00 AM - 10.00 PM"}/>
                <FoodProduct img={PizzaRange} title={"Pizza Ranch"} time={"09.00 AM - 10.00 PM"}/>
                <FoodProduct img={PizzaRange} title={"Pizza Ranch"} time={"09.00 AM - 10.00 PM"}/>
                <FoodProduct img={PizzaRange} title={"Pizza Ranch"} time={"09.00 AM - 10.00 PM"}/>
                <FoodProduct img={PizzaRange} title={"Pizza Ranch"} time={"09.00 AM - 10.00 PM"}/>
                <FoodProduct img={PizzaRange} title={"Pizza Ranch"} time={"09.00 AM - 10.00 PM"}/>
            </ul>
        </div>
    </section>
  )
}

export default FoodSection