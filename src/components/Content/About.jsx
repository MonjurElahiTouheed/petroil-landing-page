import Container from '../Layout/Container';
import Flex from '../Layout/Flex';
import logo1 from "../../assets/logo1.png"
import logo2 from "../../assets/logo2.png"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"

const About = () => {
    return (
        <div>
            <div className='bg-[#F0F0F0] py-[136px]'>
                <Container>
                    <div className='flex flex-col items-stretch lg:flex-row'>
                            <h3 className="bg-primary font-primary font-bold text-4xl px-3 md:text-4xl text-center lg:w-[31%] text-white pt-[100px] flex items-center pb-[99px] md:pl-[74px] md:pr-[77px] leading-14">Learn more about our company</h3>
                        <div className='bg-[url(assets/about.png)] bg-cover bg-no-repeat bg-center pt-[168px] pb-[142px] w-auto lg:w-[69%] l:px-[282px] text-center'>
                            <button className='font-primary text-primary bg-white px-[30px] py-3.5 font-semibold text-[15px] md:text-base hover:bg-gray-100 hover:text-red-600 duration-150
                            '>Learn More</button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="my-[117px]">
                <Container>
                <Flex className='flex-col md:flex-row justify-between gap-14 md:gap-0'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                </Flex>
            </Container>
            </div>
        </div>
    );
};

export default About;