import { Helmet } from "react-helmet-async"
import Banner from "./Banner"
import Foska from "./Foska"
import HMenu from "./HMenu"
import OrderSld from "./OrderSld"
import Rating from "./Rating"




const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MOS-BOSS | Home</title>
      </Helmet>
      <Banner/>
      <OrderSld></OrderSld>
      <HMenu></HMenu>
      <Foska></Foska>
      <Rating></Rating>
    </div>
  )
}

export default Home
