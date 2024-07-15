import MenuBanner from "../../Components/MenuBanner"
import bannerImg from "../../../Assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import MenuCard from "../../Components/MenuCard";
import { useParams } from "react-router-dom";
import { useState } from "react";


const Shop = () => {

    const [menu] = useMenu()
    const offered = menu.filter(item=> item.category === "offered")
  const dessert = menu.filter(item=> item.category === "dessert")
  const salad = menu.filter(item=> item.category === "salad")
  const pizza = menu.filter(item=> item.category === "pizza")
  const soup = menu.filter(item=> item.category === "soup")

  const categories = ['Salad', 'Pizza', 'Dessert', 'Soup', 'Drink']
  const {category} = useParams();
  const intIndex = categories.indexOf(category);
    
  const [tabIndex, setTabIndex] = useState(intIndex);

    return (
        <div>
            <MenuBanner img={bannerImg} heading={"Our Shop"} subHeading={"Wanna Try Our Dish?"}></MenuBanner>
            <div className="">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    <TabPanel>
                        <MenuCard items={salad}></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard items={pizza}></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard items={dessert}></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard items={soup}></MenuCard>
                    </TabPanel>
                    <TabPanel>
                        <MenuCard items={offered}></MenuCard>
                    </TabPanel>
                    
                </Tabs>
            </div>
        </div>
    )
}

export default Shop
