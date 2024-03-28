import React from 'react'
import PopularCategory from '../PopularCategory/PopularCategory'
import Product from '../Product/Product'
import {Burger, Pizza, Sandwich} from "../../assets/images/Icons"
import BugerImg from "../../assets/images/burger.png"
import BlackBurger from "../../assets/images/black-burger.png"
function Main() {
  return (
    <main>
      <section className='flex items-center space-x-10'>
        <PopularCategory title={"Burger"}>
          <Burger/>
        </PopularCategory>
        <PopularCategory title={"Pizza"}>
          <Pizza/>
        </PopularCategory>
        <PopularCategory title={"sandwich"}>
          <Sandwich/>
        </PopularCategory>

      </section>
      <section className='flex space-x-10'>
        <Product img={BugerImg} title={"Cheeseburger With Salad"} price={"$18.00"}/>
        <Product img={BlackBurger} title={"Black Gambugrer "} price={"$14.00"}/>
      </section>
      </main>
  )
}

export default Main