import React from 'react'
import MenuBanner from '../../Components/MenuBanner'
import SectionTitle from '../../Components/SectionTitle'
import img1 from '../../../Assets/menu/banner3.jpg'
import dessertImg from "../../../Assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../Assets/menu/pizza-bg.jpg"
import saladImg from "../../../Assets/menu/salad-bg.jpg"
import soupImg from "../../../Assets/menu/soup-bg.jpg"
import { Helmet } from 'react-helmet-async'
import MenuCategory from '../../Shared/MenuCategory'
import useMenu from '../../Hooks/useMenu'



const Menu = () => {

  const [menu] = useMenu()

  const offered = menu.filter(item=> item.category === "offered")
  const dessert = menu.filter(item=> item.category === "dessert")
  const salad = menu.filter(item=> item.category === "salad")
  const pizza = menu.filter(item=> item.category === "pizza")
  const soup = menu.filter(item=> item.category === "soup")
  const drink = menu.filter(item=> item.category === "drinks")

  return (
    <div >
      <Helmet>
        <title>Menu | MOS-BOSS</title>
      </Helmet>
      <MenuBanner img={img1} heading={"Our Menu"} subHeading={"Would you like to Try a dish?"}></MenuBanner>
      <SectionTitle heading={"Today's offer"} subHeading={"-- Don't Miss --"}></SectionTitle>
      <MenuCategory items={offered} ></MenuCategory>
      <MenuCategory img={dessertImg} heading={"Dessert"} subHeading={"Try Our Special Desserts."} items={dessert}></MenuCategory>
      <MenuCategory img={pizzaImg} heading={"Pizza"} subHeading={"Try Our Special Pizzas."} items={pizza}></MenuCategory>
      <MenuCategory img={saladImg} heading={"Salad"} subHeading={"Try Our Special Salads."} items={salad}></MenuCategory>
      <MenuCategory img={soupImg} heading={"Soup"} subHeading={"Try Our Special Soups."} items={soup}></MenuCategory>
      <MenuCategory img={img1} heading={"Drink"} subHeading={"Try Our Special Drinks."} items={drink}></MenuCategory>
    </div>
  )
}

export default Menu
