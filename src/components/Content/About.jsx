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
                    <div className='flex'>
                            <h3 className="bg-primary font-primary font-bold text-4xl w-[385px] text-white pt-[100px] pl-[74px] pr-[77px] leading-12">Learn more about our company</h3>
                        <div className='bg-[url(assets/about.png)] bg-cover bg-no-repeat bg-center pt-[168px] pb-[142px] px-[282px]'>
                            <button className='font-primary text-primary bg-white px-[30px] py-3.5 font-semibold text-base'>Learn More</button>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="my-[117px]">
                <Container>
                <Flex className='justify-between'>
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