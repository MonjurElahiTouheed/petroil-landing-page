import Container from "../Layout/Container"
import navLogo from "../../assets/logo.png"
import { useEffect, useState } from "react"
import Link from "./Link";
import Flex from '../Layout/Flex'
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch('navItems.json')
      .then(res => res.json())
      .then(data => setNavItems(data));
  }, [])
  return (
    <nav className="bg-primary py-6 md:py-[30px] sticky top-0 z-[99999]">
      <Container>
        <Flex className="px-5 xl:px-0 justify-between">
          <div>
            <img src={navLogo} alt="#navLogo.png" />
          </div>
          <Flex className="hidden lg:flex list-none gap-x-[47px]">
            {
              navItems.map(navItem => <Link key={navItem.id} navItem={navItem}></Link>)
            }
            <div><button className="font-primary font-semibold text-base px-8 py-3.5 border-2 border-white text-white hover:bg-red-700 hover:text-yellow-100 hover:border-yellow-500 duration-150">CONTACT</button></div>
          </Flex>
          <div className="block lg:hidden" onClick={handleShowMenu}>
            {
              showMenu ? <IoCloseSharp size={28} color={'#fff'} /> : <FaBars size={28} color={'#fff'} />
            }
          </div>
        </Flex>
        {
          showMenu && <Flex className="flex-col lg:hidden list-none gap-6 md:gap-x-[47px] mt-8 lg:mt-0">
            {
              navItems.map(navItem => <Link key={navItem.id} navItem={navItem}></Link>)
            }
            <div><button className="font-primary font-semibold text-base px-8 py-3.5 border-2 border-white text-white hover:bg-red-700 hover:text-yellow-100 hover:border-yellow-500 duration-150">CONTACT</button></div>
          </Flex>
        }
      </Container>
    </nav>
  )
}

export default Navbar
