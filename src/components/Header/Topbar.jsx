import Container from "../Layout/Container";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Flex from '../Layout/Flex';
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram} from "react-icons/fa6";

const Topbar = () => {
    return (
        <div className="bg-[#282828] py-4 border-b-[5px] border-[#FFB800]">
            <Container>
                <Flex className="flex-col gap-5 md:gap-0 md:flex-row justify-between">
                    <Flex>
                        <Flex className='gap-x-[5px]'>
                            <MdOutlineMarkEmailUnread size={20} color={'#FFF'}/>
                            <p className="font-primary text-xs text-white">mail@yourcompany.com</p>
                        </Flex>
                        <div className="h-4 p-[1px] bg-[#5C6A92] ml-[22px]"></div>
                        <Flex className='ml-[27px] gap-1'>
                            <FiPhoneCall size={20} color={'#FFF'}/>
                            <p className="font-primary text-xs text-white">+896 120 5889 (Toll free)</p>
                        </Flex>
                    </Flex>
                    <Flex className='gap-x-[19px]'>
                        <FaFacebookF color={"white"}/>
                        <FaTwitter color={"white"}/>
                        <FaLinkedinIn color={"white"}/>
                        <FaInstagram color={"white"}/>
                    </Flex>
                </Flex>
            </Container>
        </div>
    );
};

export default Topbar;