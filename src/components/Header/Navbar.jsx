import Container from "../Layout/Container"
import navLogo from "../../assets/logo.png"
import { useEffect, useState } from "react"
import Link from "./Link";
import Flex from '../Layout/Flex'
const Navbar = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(()=> {
    fetch('navItems.json')
    .then(res => res.json())
    .then(data => setNavItems(data));
  }, [])
  console.log(navItems)
  return (
    <nav className="bg-primary py-[30px]">
      <Container>
        <Flex className="justify-between">
            <div>
               <img src={navLogo} alt="#navLogo.png" />
            </div>
            <Flex className="list-none gap-x-[47px]">
              {
                navItems.map(navItem => <Link key={navItem.id} navItem={navItem}></Link>)
              }
              <div><button className="font-primary font-semibold text-base px-8 py-3.5 border-2 border-white text-white hover:bg-red-700 hover:text-yellow-100 hover:border-yellow-500 duration-150">CONTACT</button></div>
            </Flex>
        </Flex>
        </Container> 
    </nav>
  )
}

export default Navbar
