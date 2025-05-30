import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
import footerLogo from '../../assets/footerLogo.png';
import { IoMailUnreadOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { LuMapPinned } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import cert1 from '../../assets/cert1.png'
import cert2 from '../../assets/cert2.png'
import Description from "../Layout/Description";
const Footer = () => {
  const companies = [
    {
      name: "Home",
      path: "#"
    },
    {
      name: "About",
      path: "#about"
    },
    {
      name: "Services",
      path: "#services"
    },
    {
      name: "Gallery",
      path: "#gallery"
    }
  ];

  const others = [
    {
      name: "Blog",
      path: "#blog"
    },
    {
      name: "Contact",
      path: "#contact"
    },
    {
      name: "Terms & Conditions",
      path: "#"
    },
    {
      name: "Privacy Policy",
      path: "#"
    }
  ]
  return (
    <footer className="pt-[149px] bg-[#1F1F1F] border-t-[5px] border-[#FFB800]">
      <Container>
        <Flex className="flex-col md:flex-row justify-between">
          <div className="text-white">
            <div><img src={footerLogo} alt="#footerLogo" /></div>
            <Flex className="gap-[5px] mt-[33px]"><IoMailUnreadOutline size={20} /> <p className="font-primary text-sm text-white">mail@yourcompany.com</p></Flex>
            <Flex className="gap-[5px] my-[15px]"><FiPhoneCall size={20} />
              <p className="font-primary text-sm text-white">+896 120 5889 (Toll free)</p></Flex>
            <Flex className="gap-[5px]"><LuMapPinned size={20} /> <p className="font-primary text-sm text-white">101 Baker Street, New York, USA, 12345</p></Flex>
            <Flex className="gap-3 mt-8.5">
              <Flex className="w-[29px] h-[29px] bg-primary justify-center items-center rounded-full"><FaFacebookF color={"white"} /></Flex>
              <Flex className="w-[29px] h-[29px] bg-primary justify-center items-center rounded-full"><FaTwitter color={"white"} /></Flex>
              <Flex className="w-[29px] h-[29px] bg-primary justify-center items-center rounded-full"><FaLinkedinIn color={"white"} /></Flex>
              <Flex className="w-[29px] h-[29px] bg-primary justify-center items-center rounded-full"><FaInstagram color={"white"} /></Flex>
            </Flex>
          </div>
          <div className="flex justify-between md:w-[60%]">
            <ul>
              <li className="font-primary text-base font-bold text-white">Company</li>
              {
                companies.map((company, index) => <li className={`font-primary text-base text-white ${index === 0 ? "mt-[21px]" : "mt-[15px]"}`}><a href={company.path}>{company.name}</a></li>)
              }
            </ul>
            <ul>
              <li className="font-primary text-base font-bold text-white">Others</li>
              {
                others.map((other, index) => <li className={`font-primary text-base text-white ${index === 0 ? "mt-[21px]" : "mt-[15px]"}`}><a href={other.path}>{other.name}</a></li>)
              }
            </ul>
            <ul>
              <li className="font-primary text-base font-bold text-white">Certificate</li>
              <li className="flex gap-[5px] mt-[21px]">
                <img src={cert1} alt="#cert1" />
                <img src={cert2} alt="#cert2" />

              </li>
            </ul>
          </div>
        </Flex>
      </Container>
      <div className="bg-[#282828] py-10.5 mt-[170px]">
        <Container>
          <Description>© Copyright 2024 by AltDesain Studio – All right reserved.</Description>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
